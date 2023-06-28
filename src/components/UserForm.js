import React, { Component } from "react";
import { Connect } from "react-redux";
import { Form, Control} from 'react-redux-form'

class UserForm extends Component {
    handleSubmit = user => {
        console.log(user);
    }

    render() {
        return(
            <Form model="user" onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <Control.text model=".firstName"/>
                <label>Last Name</label>
                <Control.text model=".lastName"/>
                <label>Email</label>
                <Control.text model=".email"/>
                <button type="submit">Submit</button>

            </Form>
        );
    }
}

export default (UserForm);