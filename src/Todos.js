import React from "react";
import { useState } from "react";


function Todos(props) {

    const deleteTodo = (list) => {
        let title = list.title;
    
        const newTodo = props.todoList.filter(item => item.title !== title);
        
        props.setTodoList(newTodo)

        // en essayant de l'enregistrer dans un state j'ai un decalage pourquoi ?
        // + erreur console quand j'écris dans le input title et description

        // setTodoDel(list.title)
        // console.log(todoDel)
    }

    // const [todoDel, setTodoDel] = useState('');


return (
    <div className="m-auto col-8 d-flex">
        {
            props.todoList.map((list, index) => (
                <div className="m-5" key={index}>
                    <h2>{list.title}</h2>
                    <p>{list.description}</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(list)}
                    >Delete</button>
                </div>
            ))
        }
    </div>
)
}
export default Todos;


