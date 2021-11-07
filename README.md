# POS-System

## Introduction
This is a proposed idea of a POS System that is used to deliver a **non-direct contact** between customers and staffs within a restaurant. 
This repo can be cloned and run directly from your machine **(_Please refer to the User Manual Section_)**.


## User Manual

To start the website, run the following commands:

- Install `node_modules` folder and start the website:
```
npm install
npm start
```
- You have to download `node.js` beforehand to run these commands. If there are any missing libraries, please run: `npm install <library-name>`


## Component Structure

```
App
  |
  |___ WelcomePage (Hero.js)
  |___ ReservePage
  |___ Signup
  |___ Login
  |
  |___ Homepage (Ordering Page)
  |           |___ Categories     
  |           |          |___ ItemPage 
  |           |                      |___ Item
  |           |                              |____ PopUp (Modal)
  |           |___ Cart
  |                   |____ ItemCart
  |                                 |___ Confirmation (Modal) 
  |
  |___ Checkout
  |          |___ VisaCheckOut
  |          |               
  |          |___ MomoCheckout
  |
  |___ Thankyou
```

## Screen Flow

```
Welcome Page -> SignUp/LogIn ---> Order -> Payment ---> Thank You
             -- Place Order ----> Order -> Payment ---> Thank You
             -- Reserve Table --> Reservation Page ---> Thank You
```



## Disclaimer
- We are using photos from `pizzahut.vn` for the purpose of demonstration.
