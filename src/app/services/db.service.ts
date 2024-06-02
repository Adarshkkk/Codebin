import { Injectable } from '@angular/core';
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { AutService } from './aut.service';
import { Snippet } from '../Models/snippet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
db:any
  constructor(private authservice:AutService,private router:Router) {    this.db = getFirestore();
  }

  async createSnippet(snippet:Snippet){

try {
  const docRef = await addDoc(collection(this.db, "snippets"), {
  ...snippet,
  by:this.authservice.getUid()
  });
  console.log("Document written with ID: ", docRef.id);
  this.router.navigate(["/"])
} catch (e) {
  console.error("Error adding document: ", e);
  alert("error while creating")
}
  }

  async getAllSnippet(){
    let result: any[]=[]
    const querySnapshot = await getDocs(collection(this.db, "snippets"));
querySnapshot.forEach((doc) => {

  result.push({id:doc.id,...doc.data()})

});
return result
  }
async getSnippetById(docid:string)  {
  const docRef = doc(this.db, "snippets", docid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return  docSnap.data()
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  return {id:"",title:"notfound",code:"notfound"}
}
}
}
