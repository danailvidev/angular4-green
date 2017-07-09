import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserApi } from '../user-api';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'dv-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  formError: string;
  submitting = false;
  quote: any;

  constructor(private userApi: UserApi,
    private router: Router,
    private quotesService: QuotesService) {
      this.quote = quotesService.getQuote().subscribe(res => {
        this.quote.author = res.author
        this.quote.quote = res.quote
        console.log(res)
      });
     }

  onSubmit(signInForm: NgForm) {

    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
          console.log('got valid: ', data);
          this.router.navigate(['/authenticated']);
        },
        (err) => {
          this.submitting = false;
          console.log('got error: ', err);
          this.formError = err;
        }
        );
    }

  }

}
