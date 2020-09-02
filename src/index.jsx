import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import Comp from './components/comp/comp.jsx';
import MessageComp from './components/comp/message-comp.jsx';

const container = document.getElementById('app');

//let messages = ['Привет', 'Как дела??'];



ReactDom.render( 
    <  div >
    <    Comp name = "Darth Vader" / >
    
     <    MessageComp     />
    
    
   
    
    
    
    <    /div>,
    container
);


