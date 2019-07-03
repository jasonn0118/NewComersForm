import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export default class Validation extends Component {
    state={
        formData:{
            email:"",
            password:""
        },
        submitted: false
    }
    handleChange=(e)=>{
        const formData = this.state;
        formData[e.target.name]=e.target.value;
        this.setState({formData});
    }
    handleSubmit=()=>{
        this.setState({submitted:true},()=>{
            setTimeout(()=>this.setState({submitted:false}),5000);
        })
    }


    render() {
        const {formData,submitted}=this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Simple form</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        )
    }
}
