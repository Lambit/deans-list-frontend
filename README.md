# DEAN'S LIST CORAL

Dean’s List Coral is an Ecommerce website for marketing and distributing live coral. The goal is to display beautiful healthy coral that consumers can purchase for their home aquariums.


# FRONTEND - BUILT WITH  

React

Bootstrap

Reactstrap

Square

React-Square-Payment-Form

(View package.json for the rest of the dependencies.)


# GETTING STARTED  

Simply type,

### `npm start`

in the terminal and the browser will load the page.

# OVERVIEW  

  In the app folder a layout is created for site wide styles. The layout also holds the navigation as the header and a sticky footer. Layout carries the props children and the function logout to be used within the routes and pages. The routes folder has all the routes for the site; some are displayed on the nav, some aren’t. The sign in and login functions are passed as props to use on specific routes. As well as the coral data that was put together to display the coral being sold. The title folder has a simple function that creates a title for each page of the site. The cart and user context are housed in the app folder to be loaded when the app does. The cart is also stored in the cart context so they could live close to each other. The actual CartPage that is displayed is stored in the pages folder. The App page has functions for current users using local storage as well as login and sign up. These call the front end api to create and find a user's token. The cart and user context are called on the browser router to use across the site, while passing their variables and functions too. Everything within the app folder is to be loaded right away.

  The Api holds everything that interacts with the backend. Such as variables that are stored in an environment, and routes calling the backend. A static class ties together methods used to get and send data to api. The Auth folder holds all of the forms. The Square form does have a fetch request to send data to the backend. The common folder holds some common alerts and the carousel for the homepage. Coral data is all of the pictures and prices put together and used as an object to send throughout the site, as props. The hooks folder contains  useLocalStorage.js to determine the current user. formatCurrency.js is a lone function exported and created to change a number to currency. The useCart holds the cart’s state as well as functions to add, subtract and remove from the cart.They are all returned within useCart. After export, the function is put into the cart context where the whole site can access it.
    The pages folder has all the pages that are displayed throughout the application. The coral layout is a blueprint for the catalogs that maps over the data and displays everything that's in the coral data object. While the add to cart function is handled on the button. The cart pages use the cart state to display items in the context the add to and subtract to functions in the useCart are imported to be used here. While setting some math to variables, a total price is made and handled by the Square Payment Form. The form is in sandbox mode so the test card that can be used is,

>`4111 1111 1111 1111`
>>`12/24		373`

  Once that is completed, a user is brought to the shipping form,  then to the thank you page, then back to home. Once brought home the cartContext is empty and the user is still logged in. Going back to the terminal, logged statements on payment are in the backend.


# LINKS

* Github project https://github.com/Lambit/deans-list-frontend
* Heroku https://deans-list-coral.herokuapp.com/
   
    
    
