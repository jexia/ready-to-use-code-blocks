import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations } from "jexia-sdk-js/node";
const dataModule = dataOperations();

function App() {

    // You need to use API Key / API Secret which is generated in Jexia. Do not forget make Policy for API   
    jexiaClient().init({
      projectID: "project_id",
      key: "API_KEY",
      secret: "API_SECRET",
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
