import React from "react";
import { useState } from "react";


function Todos() {

   


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