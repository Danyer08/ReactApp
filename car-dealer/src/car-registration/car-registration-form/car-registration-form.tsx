import React from 'react';
import { FieldGroup, FieldControl, FormBuilder, Validators } from 'react-reactive-form';

const CarRegistrationForm: React.FC = () => {
    const carForm = FormBuilder.group({
        name: [null, Validators.required],
        brand: [null, Validators.required],
        motor: [null, Validators.required],
        initialPrice: [null, Validators.required],
        totalPrice: [null, Validators.required],
        available: [null, Validators.required]
    })

    const handleReset = () => {
        carForm.reset();
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Form values", carForm.value);
    }

    const TextInput = (inputProperties: any) => (
        <div className='mb-3'>
            <label>{inputProperties.meta.label}<span className='required'>*</span></label>
            <input className='form-control' placeholder={`Input ${inputProperties.meta.label}`} {...inputProperties.handler()} />
            <span className='required'>
                {inputProperties.touched
                    && inputProperties.hasError("required")
                    && `${inputProperties.meta.label} is required`}
            </span>
        </div>
    )

    return (
        <FieldGroup
            control={carForm}
            render={({ get, invalid }) => (
                <form onSubmit={handleSubmit}>

                    <FieldControl
                        name="name"
                        render={TextInput}
                        meta={{ label: "Name" }}
                    />

                    <FieldControl
                        name="brand"
                        render={TextInput}
                        meta={{ label: "Brand" }}
                    />

                    <FieldControl
                        name="motor"
                        render={TextInput}
                        meta={{ label: "Motor" }}
                    />

                    <FieldControl
                        name="initialPrice"
                        render={TextInput}
                        meta={{ label: "Initial price" }}
                    />
                    <FieldControl
                        name="totalPrice"
                        render={TextInput}
                        meta={{ label: "Total price" }}
                    />
                    <FieldControl
                        name="available"
                        render={TextInput}
                        meta={{ label: "Available amount" }}
                    />
                    <div className="mt-3 d-flex justify-content-center">
                        <button className='btn btn-default-style' type="button" onClick={handleReset}>
                            Reset
                </button>
                        <button className='btn btn-custom-style ml-2' type="submit" disabled={invalid}>
                            Submit
                </button>
                    </div>
                </form>
            )}
        />
    );
}

export default CarRegistrationForm;