import {Todo} from "./Todo";
import React from 'react';

//TODO:数据出来了，传递不到todo
const TodoList = ({todos, onTodoClick}) => {
    // console.log("###todos###");
    // console.log(todos);
    return (
        <ul>
            {todos.map(todo=>{
                // console.log("###todo");
                // console.log(todo);
                return (
                    <Todo
                        key={todo.id}
                        {...todo}
                        // text={todo.text}
                        // completed={todo.completed}
                        onClick={()=>onTodoClick(todo.id)}
                    />

                );
            })}
        </ul>

    );
}

export {TodoList};