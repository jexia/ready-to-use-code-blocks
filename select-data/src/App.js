import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations, UMSModule, field } from "jexia-sdk-js/node";
const dataModule = dataOperations(); 

function App() {

  jexiaClient().init({
    projectID: "project_id",
    key: "API_KEY",
    secret: "API_SECRET",
  },dataModule);

  
  return dataModule.dataset("books")
    .select()
    .fields("id", "title", "qty", "ibsn", "auth_id") // to select specific fields from record.  You can also pass an array of field names too
    .where(field("title").isDifferentFrom("test")) 
    .where(field("qty").isBetween(1,30))
    .where(field("qty").isEqualOrGreaterThan(15))
    .where(field("qty").isEqualOrLessThan(7))
    .where(field("qty").isEqualTo(100))
    .where(field("qty").isGreaterThan(57))
    .where(field("qty").isLessThan(100))
    .where(field("ibsn").isInArray(['978-1-56619-909-4','978-1-56619-303-4']))
    .where(field("auth_id").isNotInArray([1,7]))
    .where(field("title").isLike("Moby dick"))
    .where(field("qty").isNotNull())
    .where(field("qty").isNull())
    // .where(field("qty").satisfiesRegexp('[a-z0-9]')) //'unable to decode the expression: unsupported condition operator "regexp"',
    .subscribe(
      data => {
        return data;
      },
      error => {
        return error;
      }
    );
  
}

export default App;
