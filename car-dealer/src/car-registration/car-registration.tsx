import React from 'react';
import { FormBuilder, Validators } from "react-reactive-form";
import CarRegistrationForm from './car-registration-form/car-registration-form';
import './car-registration.css';

export default class CarRegistration extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="container">
                        <div className="d-flex mt-5">
                            <div className="card rounded-0">
                                <div className="card-header header-background">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h1>Complete required fields</h1>
                                        </div>
                                        <div className="col-md-3">
                                            <a className='btn btn-custom-style float-right' role="button" href="/">Back</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <CarRegistrationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
