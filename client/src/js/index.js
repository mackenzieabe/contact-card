//By adding the index.js file, we have created an entry point.
//The entry point is the file that webpack will look at to determine what dependencies and assets are needed for the app to work. Since we need the logic from both the form.js and the submit.js file for our app to work, we import them into index.js so that they will be included in the bundle.
//Webpack works by creating a dependency graph of all the modules and assets using the entry point as the starting point.

//Import modules 
import  "./form";
import "./submit";

//Import CSS files
import "../css/index.css";

//Import bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';


window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
   
    
  });