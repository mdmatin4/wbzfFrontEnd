import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule} from 'primeng/dropdown'
import { MessagesModule } from 'primeng/messages'

@NgModule({
  declarations: [RegistrationComponent],

    imports: [
        CommonModule,
        RegistrationRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        MessageModule,
        ReactiveFormsModule,
        RadioButtonModule,
        InputNumberModule,
        DropdownModule,
        MessagesModule
    ],
    
})
export class RegistrationModule { }
