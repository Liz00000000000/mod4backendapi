import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>First name:</label><br>
                    <input ></input>
                    <label >Last name:</label><br>
                    <input ></input>
                    <label for="fname">First name:</label><br>
                    <input ></input>
                    <label for="lname">Last name:</label><br>
                    <input type="text" id="fname" name="fname"></input>
                </form>
            </div>
        )
    }
}

export default Form
