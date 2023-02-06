import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../shared/formservice.service';


@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.css']
})
export class Section8Component implements OnInit {

  formdata = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    coment:new FormControl('')
  });
  listOfData = Array()

  constructor(public formservice: FormserviceService) { }

  ngOnInit(): void {
    this.loadData()
  }
//Getting of formdata from backend
  loadData(){
    this.formservice.getData().subscribe(res =>{
      Object.values(res).forEach(dataFromdb =>{
        this.listOfData.push(dataFromdb)
      })
    })

  }
// Posting of formdata to database
  Onsubmit(){
    this.listOfData.push(this.formdata.value)
    this.formservice.postData(this.formdata.value).subscribe(res => {
      console.log('post response', res)
      this.formdata.reset()
    })
  }
}
