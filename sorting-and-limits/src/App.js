import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations } from "jexia-sdk-js/node";

const dataModule = dataOperations();

async function App() {

  // You need to use API Key / API Secret which is generated in Jexia. Do not forget make Policy for API   
  jexiaClient().init({
    projectID: "project_id",
    key: "API_KEY",
    secret: "API_SECRET",
  },dataModule);

  //sorting 
  const sortedPosts = await dataModule.dataset("posts")
  .select()
  .sortAsc("created_at")  // .sortDesc("created_at")
  .subscribe();

  console.log(sortedPosts)

  // Limits and Offsets
  return await dataModule.dataset("posts")
  .select()
  .limit(2)
  .offset(5)
  .subscribe();
}

export default App;
