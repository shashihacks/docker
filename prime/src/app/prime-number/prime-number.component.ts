import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { PrimeService } from '../prime.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent implements OnInit {
  primes
  connectionError: boolean = false;
  private url: string = "http://localhost:9998/mydata"
  constructor(private http: HttpClient, private primeService: PrimeService) { }

  ngOnInit() {
  }

  onSubmit(formdata) {
    console.log(formdata.value.first_number, formdata.value.second_number)
    //add headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'

      })
    };

    let post = { "first_number": formdata.value.first_number, "second_number": formdata.value.second_number }
    this.http.post(this.url, post, httpOptions)
      .subscribe((response) => {
        console.log(response, typeof (response))
        this.connectionError = false;
        this.primes = response
      }, error => {
        this.connectionError = true
        console.log("Please Check You connection")
      })
    formdata.reset();
  }

}
