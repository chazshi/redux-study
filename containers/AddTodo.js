import {connect} from "react-redux";
import {addTodo} from "../actions";
import React from 'react';

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                if(!input.value.trim()){return}
                dispatch(addTodo(input.value));
                input.value = "";
            }}>
                <input ref={node=>{input=node}}/>
                <button type="submit">Add to todo list</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo);
export {AddTodo};