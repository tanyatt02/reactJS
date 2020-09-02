
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div className="lenta">{ props.text }</div>;

//
//    let key=0;
//    const messageArray=props.messages;
//    const messageComponents=messageArray.map((message)=><MessageComponent  text={ message } key={ key++ }/>);
//    window.console.log(key);
//   return  messageComponents;

function addMessage ()  {
   
    

    const [value, setValue] = React.useState([
        {text: ''}
    ]);
    const onClickBtn =  () => {
        setValue(value.map(v => {
            v.text = "Norm";
             messages.push(v.text);
    
    console.log(messages);
            return v;
        }))
    }

    return   (
     <div className='lenta'>
    
    <    MessageComponent   text={ messages }  />
    
    <button onClick={onClickBtn}>Norm</button>
    
    <    /div>
    )
}

export default addMessage
