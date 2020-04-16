import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations, field } from "jexia-sdk-js/node";
const dataModule = dataOperations(); 

async function App() {

  jexiaClient().init({
    projectID: "project_id",
    key: "API_KEY",
    secret: "API_SECRET",
  },dataModule);

  try {
    const result = await dataModule.dataset("clients")
      .delete()
      .where(field("id").isEqualTo("id1"))
      .subscribe();
  
    // you will be able to access the deleted clients here
    // they won't be stored in the DB anymore, but maybe you
    // want to display a visual confirmation of what was deleted
    return result;
  } catch (error) {
    // you can see the error info here, if something goes wrong
    return error;
  }
  
  
}

export default App;
