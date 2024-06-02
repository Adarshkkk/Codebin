import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutService } from '../../services/aut.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  /**
   *
   */
  constructor(private authservice:AutService,private router:Router) {
    
  }
register(regForm:NgForm){

  console.log(regForm.value)
  this.authservice.registerUser(regForm.value.email,regForm.value.password)
}
reset(regForm:NgForm){

regForm.reset()
}

}