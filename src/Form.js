import React from "react";

function Form(){
    return(
        <form className="d-flex flex-column m-auto col-3 p-4">
            <h1>FORM TODO LIST</h1>
            <div className="p-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" id="title" className="form-control"/>
            </div>
            <div className="p-3">
                <label htmlFor="description"  className="form-label">Description</label>
                <textarea id="description"  className="form-control" ></textarea>
                
            </div>
            <div className="p-3">
                <button className="btn btn-primary">Submit</button>
                
            </div>
        </form>
    )
}
export default Form;