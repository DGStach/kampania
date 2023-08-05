import { Component } from '@angular/core';
import { ApiserviceService } from './service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  test:any;
  newData:any;
  constructor(private _apiservice:ApiserviceService) {}

ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.newData=res;
      console.log(res)
    })
  }
}


