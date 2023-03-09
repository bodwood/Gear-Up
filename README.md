# Gear Up

#### By Bodie Wood

## Technologies Used

* _JavaScript_
* _React_
* _Chakra UI_
* _Redux_
* _Formik_
* _Yup_
* _MongoDB_
* _Express_
* _HTML_
* _CSS_

## Landing Page

![Landing Page](https://github.com/bodwood/Gear-Up/blob/main/client/public/images/Landing-Page.JPG?raw=true)



Products            |  Product Detail
:-------------------------:|:-------------------------:
![](https://github.com/bodwood/Gear-Up/blob/main/client/public/images/Products.JPG?raw=true)  |  ![](https://github.com/bodwood/Gear-Up/blob/main/client/public/images/Product-Page.JPG?raw=true)


<div style="display: flex; justify-content: space-between;">
  <div style="text-align:center">
    <h2>Checkout Screen</h2>
    <img src="https://github.com/bodwood/Gear-Up/blob/main/client/public/images/Checkout-Screen.JPG?raw=true" alt="Checkout Screen" style="width: 100%;">
  </div>
  <div style="text-align:center">
    <h2>Shipping Screen</h2>
    <img src="https://github.com/bodwood/Gear-Up/blob/main/client/public/images/Shipping-Screen.JPG?raw=true" alt="Shipping Screen" style="width: 90%;">
  </div>
</div>

<div style="text-align: center; margin-top: 10%; margin-bottom: 7%; font-weight: bold;">
  <h2>Project Demo</h2>
  <img src="https://github.com/bodwood/Gear-Up/blob/main/client/public/images/2023-03-09_11-09-27_AdobeExpress_AdobeExpress.gif?raw=true" alt="Project Demo" style="width: 90%;">
</div>



The easiest way I can think of solving this is using the tables included in GitHub's flavored markdown.

To your specific example it would look something like this:



## Project Summary: 

This project is an e-commerce store that initially focuses on selling shoes but can expand its product line to include other clothing products based on demand. The store aims to provide full CRUD functionality for managers, allowing them to create, read, update, and delete products. Customers can browse and purchase products, with the ability to view, add, and remove items from their carts, but they will not be able to modify or remove any products. The project requires tools such as VS Code, JavaScript, React, Redux, Express, Node, Chakra UI, MongoDB, Git, Formik & Yup, CSS, and HTML.

The absolute minimum features for the MVP include a sign-in page for customers, with only logged-in customers being able to purchase products. The project also requires that carts are updated based on products and their prices, with products being filtered based on categories such as New & Featured, Men, Women, Kids, Accessories, and Sales.

If there is time to spare, the project can be enhanced by allowing site visitors to locate physical stores using the Mapbox API, enabling customers to apply discount codes to their shopping carts, and implementing a "Favorites" feature that allows visitors to save their preferred products. These additional features require tools such as Canvas-Confetti, React-hot-Toast, and the Mapbox API.

Overall, the project aims to provide a seamless and enjoyable shopping experience for customers while allowing managers to maintain complete control over the store's inventory.


## Research and Planning Log
#### Friday, February 17, 2023
* 8:00 Research how to use authorization in React
  - https://www.youtube.com/watch?v=oUZjO00NkhY Use this when building login page
* 8:30 Creating components for user login, logout, and authorization
* 9:00 Researching how to create a login page for users
* 10:00 Making React Routers for navigation
* 11:00 Found tutorial for login page:
 - https://www.youtube.com/watch?v=Y-XW9m8qOis
* 11:30 Creating login components
* 12:00 Login and Register components have their needed forms
* 13:00 Researching API to use for store
* 14:00 Found that I will need to use Sanity, Stripe and Next.js for my application
* 15:00 Research Next.js for application: found good video https://www.youtube.com/watch?v=4mOkFXyxfsU
* 15:30 updating file to use js instead of TypeScript.js
* 16:00 Researching how to remove TypeScript as default language
* 16:25 trying to remove dependencies from package.json
* 16:55 Research React with Next js

#### Friday, February 24, 2023
* 8:00 Research displaying products to screen: found some great documentation on chakraui.com
* 9:00 Create MongoDB account and build cluster
* 9:30 Installed MongoDB Compass for db GUI manipulation
* 11:00 Connect MongoDB to application
* 11:30 Convert MongoDB data to json format using express
* 1:00 Researching API for clothing

## Known Bugs
* _N/A_

## License

**MIT License**

Copyright (c) 2023 Bodie Wood

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.