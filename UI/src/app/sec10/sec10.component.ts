import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec10',
  templateUrl: './sec10.component.html',
  styleUrls: ['./sec10.component.css']
})
export class Sec10Component implements OnInit {

  formdata = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  Onsubmit(){
    console.log('Form data', this.formdata.value)
  }

}
