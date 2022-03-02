import React, { useState } from "react";

function Form(props){

    const [titleState, setTitleState] = useState();
    const [descriptionState, setDescriptionState] = useState();

    const addTodo = (e)=> {
        e.preventDefault();
        
        props.setTodoList([...props.todoList, {
            title: titleState,
            description: descriptionState
          },])

          setTitleState('')
          setDescriptionState('')

    }
    return(
        <form className="d-flex flex-column m-auto col-3 p-4">
            <h1>FORM TODO LIST</h1>
            <div className="p-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                type="text" 
                id="title"
                value={titleState} 
                className="form-control"
                onInput={ (e) => setTitleState(e.target.value)}
                />
            </div>
            <div className="p-3">
                <label htmlFor="description"  className="form-label">Description</label>
                <textarea 
                id="description"  
                className="form-control" 
                value={descriptionState} 
                onInput={ (e) => setDescriptionState(e.target.value)}
                ></textarea>
                
            </div>
            <div className="p-3">
                <button 
                className="btn btn-primary"
                onClick={ (e) => addTodo(e)}
                >Submit</button>
                
            </div>
        </form>
    )
}
export default Form;