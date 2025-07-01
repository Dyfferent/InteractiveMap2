import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class MapComponent {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.httpClient.get("https://restcountries.com/v3.1/all?fields=name").subscribe({
      next: (resData) => {console.log(resData)}
    })
  }
}
