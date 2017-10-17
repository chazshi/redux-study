import React from 'react';

const Todo = ({onClick, completed, text}) => {
    // console.log("display: "  + text);
    return (
        <li 
            onClick={onClick}
            style={{textDecoration:completed?"line-through":"none"}}>
        {text}</li>
    );
}

export {Todo};