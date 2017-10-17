import {AddTodo} from "../containers/AddTodo";
import {VisibleTodoList} from "../containers/VisibleTodoList";
import {Footer} from "./Footer";
import React from 'react';

export const App = () => {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>

    );
}

// export const test = "ok!!!~";

// export default App;