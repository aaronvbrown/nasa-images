import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APOD from './apod.js';

//Business Logic

async function getAPOD() {
  try {
    const response = await APOD.getPic();
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

window.addEventListener("load", getAPOD);