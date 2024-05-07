import qr from "qr-image";
import inquirer from  'inquirer';
import fs from "fs";

inquirer
  .prompt([{
    /* Pass your questions in here */
    message : " enter URL",
    name : "URL",
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    console.log(url);
    var img = qr.image(url,{ type: 'png' });
    img.pipe(fs.createWriteStream('QRcode.png'));
  })
