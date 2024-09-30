import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs"
import {Job} from "../models/job"
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  jobs:Job[]=[]
  
  subject=new Subject()
  sub=this.subject.subscribe((x:any)=>{this.jobs=x})
  
  constructor(private h:HttpClient){
    
  }
  ngOnInit(): void {
    this.h.get("http://localhost:2000/Jobs/").subscribe((res)=>this.subject.next(res))
  }

}
