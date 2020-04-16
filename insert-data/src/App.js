import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations } from "jexia-sdk-js/node";
const dataModule = dataOperations();


function App() {
  jexiaClient().init({
    projectID: "project_id",
    key: "API_KEY",
    secret: "API_SECRET",
  },dataModule);

  const posts = dataModule.dataset("posts");

  // Single record
  // const insertQuery = posts.insert({
  //   title: "New Post",
  //   content: "content here",
  // });

  // Multiple records
  const insertQuery = posts.insert([
    { title: "New Post", content: "content here" },
    { title: "Another Post", content: "some more content" },
  ]);

  // Either way, the response will be an array
  return insertQuery
        .subscribe(
          data => {
            return data;
          },
          error => {
            return error;
          }
        )
}

export default App;
