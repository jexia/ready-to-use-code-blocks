import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jexiaClient, dataOperations, field } from "jexia-sdk-js/node";
const dataModule = dataOperations(); 

function App() {

  jexiaClient().init({
    projectID: "project_id",
    key: "API_KEY",
    secret: "API_SECRET",
  },dataModule);


  // Filtering in a flat way
  const isPostedByTomAndIsAboutSports = field("author_name")
  .isEqualTo("Tom")
  .and(field("title").isLike("sports"));

  // Filtering with one nested level
  const isPostedByDickAndIsAboutMusic = field("author_name")
  .isEqualTo("Dick")
  .and(field("title").isLike("music"));

  const isTomOrIsDickHarry = field("author_name")
  .isEqualTo("Tom")
  .or(
    isPostedByDickAndIsAboutMusic // nested level
  );

  // Filtering with multiple nested levels
  const isAuthorDutch = field("author_country").isEqualTo("NL");
  const isKidOrSenior = field("author_age")
  .isGreaterThan(64)
  .or(field("author_age").isLessThan(16));

  const isTomAndIsDuthOrKidOrSenior = field("first_name")
  .isEqualTo("Tom")
  .and(
    isAuthorDutch.or(isKidOrSenior)
  );
  

  return dataModule.dataset("books")
    .select()
    .fields("id", "first_name", "author_name", "title", "author_country", "author_age")
    .where(isPostedByTomAndIsAboutSports) 
    .where(isPostedByDickAndIsAboutMusic)
    .where(isTomOrIsDickHarry)
    .where(isAuthorDutch)
    .where(isKidOrSenior)
    .where(isTomAndIsDuthOrKidOrSenior)
    .execute()
    .then(data => {
      return data;
    }).catch(error => {
      return error;
    });
  
}

export default App;
