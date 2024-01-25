# Quadratic Equation Solver
![Image](https://github.com/PJ004/Quadratic-Equation-Solver/assets/123962697/9591fedd-efbc-4f77-9932-be056018703f)

## About this project
This is a simple website that I built with HTML/CSS and Javascript to teach myself how to use Javascript

This website is available for use on http://anonymousjguy.rf.gd

If you feel apprehensive about going to an insecure website you could just download the repository and run it locally
Since this is just a simple website, it can be opened in your web browser.

## Cloning the repository

### Using a zip file
If you're not comfortable using a command line interface, please use this method to download the repository.

On the right hand corner of this page, where there is a green button that reads `<> Code`, click on the drop down menu and select `Download ZIP`.
Unzip the file and click on `index.html`. The file should automatically load up in a web browser.

### CLI

#### On Linux/Mac OS
Type this command in the terminal

`git clone https://github.com/PJ004/Quadratic-Equation-Solver`

Using your file manager, go to the directory that was just created on your Desktop (or wherever this repo was cloned) and double click on the `index.html` file.
It should open up in your default browser.

## How it works
`index.html` is the landing page for the website. This contains the information needed for the webpage to display properly on most browsers.
In other words, this webpage is what the user sees upon first entering the website. The user can enter any value in the input fields provided

`index.js` contains the javascript code that handles the math behind the website. This script is executed whenever the submit button is pressed.
Upon execution the script updates the webpage (i.e. `index.html`) so that the solutions are displayed. The script also handles exceptions.

`style.css` is the stylesheet for the website. If the website does not have a dark background, that must mean that the stylesheet hasn't been loaded properly
