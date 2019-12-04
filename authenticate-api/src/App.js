import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations } from "jexia-sdk-js/node";
const dataModule = dataOperations();

function App() {

  // You need to use API Key / API Secret which is generated in Jexia. Do not forget make Policy for API   
  jexiaClient().init({
    projectID: "965e8fba-7d43-4cba-9ee4-6bf9c84d0f20",
    key: "129a4e21-36b1-4406-92e8-40b43abd7e1a",
    secret: "kyH9I+LCUy5ns2a/2vdf3oThHMbMeRK76trzt1+HVBUQQG9uH8bGGTM6GA1LSbqnbhi7kpqhmtD0A/0PD4O8LQ==",
  },dataModule);


    // Now you can run CRUD operations for DataSet: clients
    return dataModule.dataset("clients")
      .select()
      .execute()
      .then(data => {
      // you have been succesfully logged in!
      // you can start using the dataModule variable to operate on records here
      return data;
    }).catch(error => {
      // uh-oh, there was a problem logging in, check the error.message for more info
      return error;
    });
}

export default App;
