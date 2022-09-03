//By adding the index.js file, we have created an entry point.
//The entry point is the file that webpack will look at to determine what dependencies and assets are needed for the app to work. Since we need the logic from both the form.js and the submit.js file for our app to work, we import them into index.js so that they will be included in the bundle.
//Webpack works by creating a dependency graph of all the modules and assets using the entry point as the starting point.

//Import modules 
import "./form";
import { initDb, getDb, postDb } from './database';
import { fetchCards } from "./cards";
import { toggleForm, clearForm} from "./form";

//Import CSS files
import "../css/index.css";

//Import bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

import { initdb } from './database';

window.addEventListener('load', function () {
  initDb()
  fetchCards();
  //we added the fetchCards() function into our on-load event listener so that data is pulled from our IndexedDB database and a new card is created and rendered per data object. If you still have the getDb() and postDb() functions here, please remove them now.
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

// Form functionality
const form = document.getElementById("formToggle");
const newContactButton = document.getElementById("new-contact");
let submitBtnToUpdate = false;
let profileId;

newContactButton.addEventListener('click', event => {
  toggleForm()
})

form.addEventListener('submit', event => {
  // Handle data
  event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;

  // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {

    fetchCards();
    // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }

  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
});

