import { Component, OnInit } from '@angular/core';
import { News2apiservicesService } from '../service/news2apiservices.service'
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _service: News2apiservicesService) { }

  //display data
  topHeadingDisplay: any = []


  ngOnInit(): void {
    this._service.topHeading().subscribe((res) => {
      //console.log(res);
      this.topHeadingDisplay = res.articles;
    })

  }

}
