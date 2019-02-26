# Meal_booking-app

[![Build Status](https://travis-ci.org/mayorkoon/Meal_booking-app.svg?branch=develop)](https://travis-ci.org/mayorkoon/Meal_booking-app)[![Coverage Status](https://coveralls.io/repos/github/mayorkoon/Meal_booking-app/badge.svg?branch=develop)](https://coveralls.io/github/mayorkoon/Meal_booking-app?branch=develop)

Book A Meal
Book A Meal is Meal Booking web app , designed for rendering better services and providing the best meals to users

Getting Started
Clone the Repo.
git clone https://github.com/mayorkoon/Meal_booking-app

Prerequisites
The following tools will be needed to run this application successfully:

Node v10.15.0 or above
Npm v6.4 or above
Endpoints
GET api/v1/meals/ Caterers can get all the meals options they have uploaded

POST api/v1/meals/ Catereres can add a new meal options 

PUT api/vi/meals/:mealId Caterers can update their meal options using the mealId

DELETE api/v1/meals/:mealId Caterers can delete a meal options using the mealId

GET api/v1/menu/ Caterers and Users can Get the menu for the day

POST api/v1/menu/ Caterers can Set up a new menu for a specific day

GET api/v1/orders Get All Orders

POST api/v1/orders customers can make orders

PUT api/v1/orders/:orderId customers can modify their orders using the orderId

Installation
On your Local Machine

Pull the develop branch off this repository
Run npm install to install all dependencies
Run npm dev to start the app using nodemon
Access all endpoints on localhost:9001
Running the tests
Run npm test in the terminal for the cloned folder.

Built With
Node.js - Runtime-Enviroment
