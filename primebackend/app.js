//import librraies and express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors= require('cors')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



function checkPrime(number) {
  if (number < 2)
    return false;
  var isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime
}

function computePrimes(first_number, second_number) {
  var start = first_number <= second_number ? first_number : second_number;
  var end = first_number > second_number ? first_number : second_number;
  var primes = [];

  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) {
      primes.push(i)
    }
  }

  return primes;
}

//send response in json, stringified
app.post('/mydata', function (req, res) {
  res.send(JSON.stringify(computePrimes(req.body.first_number, req.body.second_number)));
  // console.log(req.body.first_number + req.body.second_number)
});



//change port number if required
app.listen(9998, () => console.log('Prime number application server running on 9998!'))
