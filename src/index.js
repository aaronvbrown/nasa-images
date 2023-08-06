import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APOD from './apod.js';

//Business Logic

async function getAPOD(date) {
  try {
    const response = await APOD.getPic(date);
    if (response instanceof Error){
      const errorMessage = `there was a problem with the API: ${response.message}`;
      throw new Error(errorMessage);
    }
    appendPic(response);
  }
  catch(error){
    printError(error);
  }
}






// function getAPOD() {
//   APOD.getPic()
//     .then(function (response) {
//       if (response.url) {
//         appendPic(response);
//       } else {
//         printError(response);
//       }
//     })
// }

//UI Logic

function appendPic(response) {
  let picDiv = document.getElementById('spacediv');
  let img = document.createElement('img');
  img.src = response.url;
  picDiv.innerText = response.title;
  picDiv.append(img);

}

function printError(error) {
  document.getElementById("spacediv").innerText = error.message;
}

function handleFormSubmission(e) {
  e.preventDefault();
  let date = document.getElementById("picDate").value;
  getAPOD(date);

}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission) 
})
