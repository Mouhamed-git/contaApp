import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faUnlock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';
import { AuthModel } from '../shared/models/auth-model';
import { FormValidator } from '../utils/form-validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    faEnvelope = faEnvelope;
    faUnlock = faUnlock;
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    showPassword: boolean = false;
    auth: AuthModel = new AuthModel();

    constructor(public authService: AuthService, private router: Router, private toast: HotToastService) {}

    ngOnInit(): void {}

    getError(field: NgModel) {
        return FormValidator.getError(field);
    }

    isValid(field: NgModel) {
        return FormValidator.isValid(field);
    }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    login(form: NgForm) {
        console.log(form.value);
        if (form.invalid) {
            return;
        }
        this.authService
            .signIn(form.value)
            .pipe(
                this.toast.observe({
                    loading: 'Connexion en cours...',
                    success: 'Connexion réussi',
                    error: 'Email/Mot de passe incorrect',
                    //error: ({ message }) => `${message}`
                })
            )
            .subscribe(
                (data) => {
                    console.log(data);
                    this.router.navigateByUrl('/');
                },
                (error) => {
                    console.log(error);
                }
            );
    }
}
