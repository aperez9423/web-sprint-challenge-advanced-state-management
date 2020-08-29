import React, { useState } from 'react';

import { addSmurf } from '../actions/addSmurf';
import { connect } from 'react-redux';

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({ name:'', age:'', height:''});

     const changeHandler = e => { 
        setSmurf({ ...smurf, [e.target.name] : e.target.value })
    };

    const submitHandler = e => { 
        e.preventDefault();
        props.addSmurf(smurf);
        setSmurf({ name: '', age: '', height: ''});
    };

    return (
        
    <div className= 'smurf-form'>
        <h2>Create a New Smurf</h2>

        <form onSubmit={submitHandler}>
            <label>
                Name: 
                <input
                    type = 'text'
                    name = 'name'
                    value = {smurf.name}
                    onChange = {changeHandler}
                    placeholder = 'Name of Smurf'
                    />
                </label>
                <label>
                Age: 
                <input
                    type = 'text'
                    name = 'age'
                    value = {smurf.age}
                    onChange = {changeHandler}
                    placeholder = 'Age of Smurf'
                    />
                </label>
                <label>
                Height: 
                <input
                    type = 'text'
                    name = 'height'
                    value = {smurf.height}
                    onChange = {changeHandler}
                    placeholder = 'Height of Smurf in cm'
                />
                </label>
            <button on-click={submitHandler}>Add Smurf</button>
            </form>
        </div>
        );
};

export default connect(null, { addSmurf })(SmurfForm)