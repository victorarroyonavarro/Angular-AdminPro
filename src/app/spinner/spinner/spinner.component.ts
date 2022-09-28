import { SpinnerService } from './../../services/spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']

})
export class SpinnerComponent  {
  constructor(private spinnerService: SpinnerService) {}
  isLoading$ = this.spinnerService.isLoading$;
}
