import React from "react";
import { useState } from "react";


function Todos() {

    const [todoList, setTodoList] = useState([
        {
            title: "titre1",
            description: "lorem ipsum"
        },
        {
            title: "titre2",
            description: "lorem ipsum"
        },
        {
            title: "titre3",
            description: "lorem ipsum"
        },

    ]);


    return (
        <div className="m-auto col-8 d-flex">
            {
                todoList.map((list, index) => (

                    <div className="m-5">
                        <h2>{list.title}</h2>
                        <p>{list.description}</p>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Todos;