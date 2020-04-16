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

    console.log(dataModule.dataset("clients")
    .select()
    .subscribe(
      data => {
        return data;
      },
      error => {
        return error;
      }
    ))
    

    const filter = field("id").isInArray(["id1", "id2"]);
    const affectedRecords = await dataModule
      .dataset("clients")
      .update({ status: "good" })
      .where(filter)
      .subscribe();
  
    return affectedRecords;

  } catch (error) {
    // you can see the error info here, if something goes wrong
    return error;
  }

}

export default App;
