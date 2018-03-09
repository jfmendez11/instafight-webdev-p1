# Instafight (Presenté el examen con la sección 1, pero soy de la sección 2)

Instafight is a web application, where 2 Instagram users are submited by the user, and they compete to see which one has more likes in their last photos.

# SetUp

To edit InstaFight code on your local machine follow these steps:

* Make sure you have npm installed.
* Install `nodemon` -- `npm install -g nodemon`
* Clone or download the repo in your local machine.
* Install dependencies: `cd instafigth-webdev-p1 && npm install`-- `cd frontend && npm install`
* After this you are reade to edit the code. To view changes, run in `frontend` folder: `npm run build`
* Then on `instafigth-webdev-p1` run `npm start`
* **Note: You only have to run `npm start` once, as nodemon restarts the server every time a file has changed.**
* View results at: http://localhost:8000

# Using the app

* Enter 2 Instagram usernames in inputs Player 1 and Player 2
* Click on Submit button
* After a few seconds the winner will appear
* Click on View Winner Pics to display the winner's pictures in a carousel
* Click on New Fight to reset the view and start a new fight
* On the Navbar, click on History to view all the fights, the winner, and the likes the winner had
* Click on Back button to keep fighting users

# My Creative Component

I decided to implement a creative component, that displays a carousel with the pictures of the winner!

# View app

**https://instafightclub.herokuapp.com**