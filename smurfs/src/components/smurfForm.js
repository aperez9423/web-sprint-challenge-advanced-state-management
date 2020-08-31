import React from 'react';
import styled from 'styled-components'
import { addSmurf } from '../actions/addSmurf';
import { connect } from 'react-redux';

import Smurfette from '../images/smurfette.jpeg'

class AddSmurfForm extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addSmurf({
            id: Date.now(),
            name: this.state.name,
            age: this.state.age, 
            height: this.state.height
        })
        this.setState({ name: '', age: '', height: '' })
    }

    render() {

        return (
         <div className="smurf-form">
             <div> 
                <Image src= { Smurfette }/>
             </div>
            <Heading>Create A Smurf</Heading>

            <Form onSubmit={this.submitHandler}>
                <label>
                    Name
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                        placeholder="Enter a Name"
                    />
                </label>
                <label>
                    Age 
                    <input 
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.changeHandler}
                        placeholder="Enter an Age"
                    />
                </label>
                <label>
                    Height 
                    <input 
                        type="text"
                        name="height"
                        value={this.state.height}
                        onChange={this.changeHandler}
                        placeholder="Enter a Height in cm"
                    />
                </label>
            <ButtonDiv>
                    <button type="submit">Create Villager</button>
            </ButtonDiv>
            </Form>
         </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)

const Image = styled.img `
    margin-top: 0;
    height: 30rem;
    border: .5rem solid black;
    border-radius: 1rem;
    float: right;
    margin: 3vw;
`
const Form = styled.form `
    display: flex;
    flex-direction: column;

    label {
        font-size: 1.2rem;
        font-family: Londrina Solid;
        font-weight: bolder;
    }

    input {
        margin: 1rem;
        font-size: 1.2rem;
        border: .1rem solid black;
    }
`

const Heading = styled.h2 `
    font-size: 2rem;
    font-family: Londrina Solid;
    font-weight: bolder;
`
const ButtonDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        padding: .8rem;
        border: .3rem solid black;
        border-radius: 1rem;
        margin-top: 1rem;
        margin-bottom: 15rem;
        font-size: 1.5rem;
        font-family: Londrina Solid;
        font-weight: bolder;
        background-color: blue;
        color: white;
    }
`