import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Component, Inject, OnInit } from '@angular/core';
import {  FormBuilder,  FormControl,  FormGroup,  Validators,} from '@angular/forms';
import { regex, regexErrors, mensajesError } from '../../../app/utils';
import { UsuarioService } from './../../services/usuario.service';
import { NOTYF } from '../../utils/notyf.token';
import { Notyf } from 'notyf';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registroForm: FormGroup;
  regErrors = regexErrors;
  mensajesError = mensajesError;
  constructor(private router: Router, private fb: FormBuilder
    ,private usuarioService: UsuarioService
    , @Inject(NOTYF) private notyf: Notyf,
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.pattern(regex.email)]],
      password: ['', [Validators.required]],
      recuerdame:[false]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.usuarioService.loginUsuario(this.loginForm.value).subscribe(
      (resp: any) => {

      if (this.loginForm.get('recuerdame').value){
        localStorage.setItem('email',this.loginForm.get('email').value);
      }
      else{
        localStorage.removeItem('email');
      }



        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err)
        /*Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.msg,
          showConfirmButton: false,
          timer: 2000,
        });*/
        this.notyf.error(err.error.msg);
      }
    );




  }
}
