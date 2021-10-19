import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  active = 1;
  projects=[
    {
    type:"Web Design",
    content:[
      {
        imgSrc: "../../../assets/images/portfolio-09.jpg",
        title: "App1",
        stacks: ["htm", "css", "js"],
        status:true
          
      },
      
      {
        imgSrc: "../../../assets/images/portfolio-08.jpg",
        title: "App2",
        stacks: ["htm", "css", "js"],
        status:false
          },

    ]

    },

    {
      type:"Mobile Design",
      content:[
        {
          imgSrc: "../../../assets/images/portfolio-07.jpg",
          title: "App1",
          stacks: ["Figma", "Material Ui", "Photoshop"],    
              status:false
            
        },
        
        {
          imgSrc: "../../../assets/images/portfolio-06.jpg",
          title: "App1",
          stacks: ["Figma", "Material Ui", "Photoshop"],    
              status:true
            },
  
      ]
  
      },

      {
        type:"Graphic",
        content:[
          {
            imgSrc: "../../../assets/images/portfolio-05.jpg",
            title: "App1",
            stacks: ["Photoshop" ,'Illustrator'],    
                status:true
              
          },
                    
        ]
    
        },
  



  ]



  constructor() { }

  ngOnInit(): void {
  }

}
