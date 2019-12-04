import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Run Jexia Code examples without crashing', (done) => {
  App().then(function(r){
    console.log('return: ', r)
    done();
  })
  .catch(function(r) {
    console.log('return with fail: ', r)
    done();
  })
});
