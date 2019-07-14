import React from 'react';
import ReactDOM from 'react-dom';
import yall from "yall-js"
import './index.css';
import App from './App';

require('typeface-inter')
require('typeface-open-sans-condensed')
require('typeface-roboto')
require('typeface-roboto-condensed')

document.addEventListener("DOMContentLoaded", yall);

ReactDOM.render(<App />, document.getElementById('root'));
