import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  primeNumbers=[];
  constructor(private http:HttpClient) {
  }
  // getPrimes(url,data) {
  //  return this.http.post(url, data)
  //   .subscribe(response => {   
  //    console.log(response, typeof(response))
  //     // this.primes = response
  //     // console.log(typeof (this.primes))
   
  //   })
  // }
}
