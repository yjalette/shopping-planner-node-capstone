# shopping-planner-node-capstone

An app that keeps all your links organized. Link It Now.

## Screenshots
![Landing page screen shot](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/home-page-screen-sh.png)
![Sign up/sign in screen shot](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/home-page-screen-full-sh.png)
![Create a link](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/create-a-link-screen-sh.png)
![Saved links](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/saved-links-screen-sh.png)

## Use Case
With Link it all your links are organized and are accessible from any devices.

## Initial UX
User Stories
* AS A VISITOR, NOT LOGGED IN

* As an initial visitor to the page, I want to land on the web page and see what the page is about so I can understand what the app is and does and decide whether or not to create an account to be able to use the app.
* As a visitor, I want to create a new account so that I can use the app.
(LANDING PAGE--wireframe will have title, logo, a few details about logging in and what the app is about)
![UI Flow handwritten draft](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/index-screenshot.JPEG)

* As a visitor, I want to be able to view a demo or read about/see how the app works so that I can decide if I want to sign up for an account. (LANDING PAGE plus DEMO?)
https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/signin.png
![UI Flow handwritten draft](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/signup.png)
* As a visitor who has already created an account, I want to log in so that I can access my account.
![UI Flow handwritten draft](https://github.com/yjalette/shopping-planner-node-capstone/blob/master/readme-images/signin.png)
* AS A LOGGED-IN USER
* As a user, I want to set up my new account by orginizing all my links in one place by sectioning them so I can access them anytime I need them..
* As a user, I want to view my saved links finds I have entered..

## Working Prototype
Find a working prototype with at https://shopping-planner-node-capstone.herokuapp.com/ .

## Functionality
* When they first set up their account, users are guided through a setup process in which they will be asked to create a new find.
* Once they have initially set up an account, view their saved finds.

## Technical
Link It was built as two separate parts.

### Front End

* HTML5
* CSS3
* JavaScript
* jQuery
* React

### Back End

* Node.js
* Express.js
* MongoDB
* Mongoose
* mLab database
* Mocha and Chai for testing

### Responsive
* The app is responsive and optimized for both desktop and mobile viewing and use.

### Security
* User passwords are encrypted using bcrypt.js


## API Documentation
API endpoints for the back end include:
* POST to '/users/create' for creating a new user
* POST to '/signin' to sign in an existing user
* POST to '/new/create' to add an achievement to a user's list of accomplishments
* PUT to '/achievement/:id' to update an existing achievement
* GET to '/achievements/:user' to access all of a user's existing achievements
* GET to '/achievement/:id' to access a single achievement by ID
* DELETE to '/achievement/:id' to delete a single achievement by ID

## Development Roadmap
Planned additional features and improvements will allow users to:
* Be presented with motivational quotations that appear at random on their homepage.
* Enter and store compliments they receive from friends, co-workers, bosses, etc. in a "Bank"; and
* Refer back to these compliments (that help them to see that they are qualified and skilled) by viewing the "Bank."
* Change password
* Update email address

## NPM command lines
* npm install ==> install all node modules
* nodemon server.js ==> run node server
* npm test ==> run the tests
