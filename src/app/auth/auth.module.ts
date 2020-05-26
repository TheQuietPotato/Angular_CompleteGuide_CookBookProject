import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRootingModule } from './auth-rooting.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        AuthRootingModule,
        SharedModule
    ],

})
export class AuthModule {

}