'use strict';

var button = document.getElementById('button');
var output = document.getElementById('output');
var bmi;
var weight;
var height;
var test;


var log = function (text) {
    output.innerHTML = (text + '<br><br>');
};

log('');

function Round(n, k) {
    var factor = Math.pow(10, k);
    return Math.round(n * factor) / factor;
}

button.addEventListener('click', function () {

    weight = prompt('Podaj Wagę w kilogramach !', "0");
    height = prompt('Podaj Wzrost w centymetrach !', "0");

    console.log('wzrost: ' + weight);
    console.log('waga: ' + height);

    bmi = weight / Math.pow(height / 100, 2);

    //if (bmi = NaN) {
    // log('JD');
    // }

    log('Twoje BMI wynosi: ' + '<span class="bmi">' + (Round(bmi, 1)) + '</span>');
    output.classList.add('visible');
});





//function wynik() {
//   bmi = (weight/(height/100)*(height/100));
//  test = (30-10);
//};

//console.log(bmi);
//console.log(test);

//output.innterHTML = ('Twoje BMI wynosi: ' + bmi);