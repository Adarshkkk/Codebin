import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators,FormsModule ,FormBuilder} from '@angular/forms';
import { AutService } from '../../services/aut.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  /**
   *
   */
  constructor(private formBuilder: FormBuilder,private authservice:AutService,private router:Router) {
    
    
  }

email=new FormControl("",[
  Validators.required,
  Validators.email
]
)
password=new FormControl("",[
  Validators.required,
  Validators.minLength(6)
]
)
loginForm = this.formBuilder.group({
 email:this.email,
 password:this.password 

})
login(){
  console.log(this.loginForm.value)
  this.authservice.loginUser(this.loginForm.value.email!,this.loginForm.value.password!)
}
reset()
{
  this.loginForm.reset();
}
}
