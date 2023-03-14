import { useState } from "react";

function FormCategory() {
    const handleClick = () => {
        console.log('Button was clicked!');
    };

    return (
        <form className="farm-details-form">
                    <div className="farm-details-sign"><h2 className="farm-details-headline">Farm details</h2>
                    </div>
                    <label>Farm name</label>
                    <p>
                    <input className = "text-input" type="text" placeholder="Farm 01"/>
                    </p>
                    <label>Farm notes (optional)</label>
                    <p>
                    <input className = "text-input" type="text"/>
                    </p>
                    <button onClick={handleClick}>Cancel</button>
                    <button onClick={handleClick}>Save</button>
        </form>);
}

export default FormCategory;