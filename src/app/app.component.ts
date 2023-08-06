import { Component } from '@angular/core';
import { ApigetProducts } from './service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  newData:any;
  constructor(private _apiservice:ApigetProducts) {}

ngOnInit(){
    this._apiservice.getProducts().subscribe(res=>{
      this.newData=res;
      console.log(res)
    })
  }
}


