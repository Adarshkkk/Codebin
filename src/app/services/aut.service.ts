import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AutService {
  private uid?:string

  constructor(private router:Router) {

    
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    this.uid=uid
    console.log("User login in as",user.email)
    // ...
  } else {
    // User is signed out
    // ...
    this.uid=undefined
    console.log("User logout")
    this.router.navigate(['/'])


  }
});
   }
   isAuthenticated(){
    return this.uid ? true:false
   }
   getUid(){
    return this.uid
   }
  registerUser(email:string,password:string){

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    this.router.navigate(['/'])
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
    alert("Something went wrong with sign up try again")
    // ..
  });


}
loginUser(email:string,password:string){
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    this.router.navigate(['/'])

    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
    alert("Something went wrong with login up try again")
  });
}
logout(){
  const auth = getAuth();
signOut(auth).catch((error) => {
  // An error happened.
  alert("Something went wrong while logout")

});
}


}
