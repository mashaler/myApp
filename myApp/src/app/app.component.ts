import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  results: any;

constructor(private http: HttpClient) {
}

ngOnInit(): void {
  this.getApiResponse();
}

getApiResponse() {
  this.http.get(
  // API Link
  
  'https://fakestoreapi.com/products').subscribe((response) => {
    console.log(response);    
    this.results = response;

  });
}


}