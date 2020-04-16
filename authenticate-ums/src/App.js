import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations, UMSModule } from "jexia-sdk-js/node";
const ums = new UMSModule(); 
const dataModule = dataOperations();

async function App() {
  jexiaClient().init({  
    projectID: "your-project-id",
  }, ums, dataModule);

  // Sign In with user created in Jexia Panel
  await ums.signIn({  
    email: 'elon@tesla.com',  
    password: 'secret-password', 
    default: true,
    alias: 'user' 
  });

  // Now you can run CRUD operations for DataSet: clients
  return dataModule.dataset("clients")
    .select()
    .subscribe(
      data => {
        // you have been succesfully logged in!
        // you can start using the dataModule variable to operate on records here
        return data;
      },
      error => {
        // uh-oh, there was a problem logging in, check the error.message for more info
        return error;
      }
    )
  }

export default App;
