import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../Models/snippet';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
 
  constructor(private formBuilder: FormBuilder,private dbService:DbService) {
    
    
  }
  title=new FormControl("",[
    Validators.required,
  ]
  )
  code=new FormControl("",[
    Validators.required,
  ]
  )
  binform = this.formBuilder.group({
   title:this.title,
   code:this.code 
  
  })

  async save(){
    console.log(this.binform.value)
    await this.dbService.createSnippet(this.binform.value as Snippet)
  }
}
