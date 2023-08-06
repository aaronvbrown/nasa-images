import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APOD from './apod.js';

//Business Logic

function getAPOD() {
  APOD.getPic()
    .then(function (response) {
      if (response.url) {
        appendPic(response);
      } else {
        printError(response);
      }
    })
}

//UI Logic

function appendPic(response) {
  let picDiv = document.getElementById('spacepic');
  let img = document.createElement('img');
  img.src = response.url;
  picDiv.innerText = response.title;
  picDiv.append(img);

}

function printError(error) {
  document.getElementById("picDiv").append(error.message);
}

window.addEventListener("load", getAPOD);