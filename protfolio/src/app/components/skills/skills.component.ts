import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: "HTML",
      value: 90,type:"danger"
    },
    {
      name:"CSS",
      value:90,type:"danger"
    } ,
    {
      name:"JavaScript",
      value:90,type:"success"
    } ,
    {
      name:"Angular",
      value:60,type:"success"
    } ,
    {
      name:"PHP",
      value:50,type:"success"
    } ,
    {
      name:"MongoDB",
      value:40,type:"success"
    } ,
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
