import { NOTYF } from '../../utils/notyf.token';
import { Notyf } from 'notyf';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Inject } from '@angular/core';
import { regex, regexErrors, mensajesError } from '../../../app/utils';
import { UsuarioService } from './../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registroForm: FormGroup;
  regErrors = regexErrors;
  mensajesError = mensajesError;
  constructor(
    private fb: FormBuilder,
    @Inject(NOTYF) private notyf: Notyf,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group(
      {
        nombre: ['prueba', [Validators.required, Validators.minLength(2)]],
        email: [
          'prueba@gmail.com',
          [Validators.required, Validators.pattern(regex.email)],
        ],
        password: [
          'Victor.123',
          [Validators.required, Validators.pattern(regex.password)],
        ],
        password2: ['Victor.123'],

        /*terminos: [false, [Validators.required]],*/
      },
      { validators: this.passwordsIguales('password', 'password2') }
    );
  }

  contrasenasNoValidas() {
    const psw1 = this.registroForm.get('password').value;
    const psw2 = this.registroForm.get('password2').value;
    if (psw1 != psw2) {
      return true;
    } else {
      return false;
    }
  }

  contrasenaRequerida() {
    const psw2 = this.registroForm.get('password2').value;
    if (psw2 != '') {
      return false;
    } else {
      return true;
    }
  }

  passwordsIguales(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.get(pass1);
      const passControl2 = formGroup.get(pass2);

      if (passControl2.value === '') {
        passControl2.setErrors({ esRequerido: true });
        return;
      }

      if (passControl.value != passControl2.value) {
        passControl2.setErrors({ noEsIgual: true });
        return;
      }

      passControl2.setErrors(null);
    };
  }

  onSubmit() {
    if (!this.registroForm.valid) {
      return;
    }

    this.usuarioService.crearUusario(this.registroForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        /*Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: resp.msg,
          showConfirmButton: false,
          //width: '100px',
          timer: 2000,
        });*/
        this.notyf.success(resp.msg);
      },
      (err) => {
        /*  Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.msg,
          showConfirmButton: false,
          timer: 2000,
        });*/
       // this.notyf.success('Correcto!!adasda qwe  qwe');
        this.notyf.error(err.error.msg);
        /*this.notyf.open({
      type: 'Warning',
      message: 'Send us <b>an email</b> to get support',

    });*/
      }
    );

    /* this.notyf.success('Correcto!!adasda qwe  qwe');
    this.notyf.error('Please fill out all the fields in the form');
    this.notyf.open({
      type: 'Warning',
      message: 'Send us <b>an email</b> to get support',

    });*/
  }
}
