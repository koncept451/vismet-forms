import React, { useState, useEffect } from "react";
import { Button, Label, Col, FormGroup, Row, ButtonGroup, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../App.css';


const ChangeRequestEntryForm = () => {
    
    const [options, setOptions] = useState([]);

     useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/employees.json');
            const data = await response.json();
            setOptions(data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
        };

        fetchData();
    }, []);
    
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    
    return(
        <Container>
            <h1 className="form-header">New Change Request</h1>
            <Formik
                onSubmit={handleSubmit}
                //validate={validateEntryForm}
                initialValues={{
                    crType: '',
                    crDoc: '',
                    crRev: '',
                    crResParty: '',
                    crSign: '',
                    agree: false,
                    contactType: '',
                    request: '',
                    crDate: '',
                    crContact: ''
                }}
                >
                {({ resetForm }) => (
                <Form>
                    <FormGroup row className='bordered-form-group' >
                        <Row>
                            <Label htmlFor='crType' lg='1' className="text-lg-start mt-2">
                                Type:
                            </Label>
                            <Col lg='3'>
                                    <Field 
                                        className='form-control form-select first-row-spacing' 
                                        name='crType' 
                                        placeholder='crType' 
                                        as='select' 
                                    >
                                        <option value='New'>New</option>
                                        <option value='Revised'>Revision</option>
                                    </Field>
                                        
                                    <ErrorMessage name='crType'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                            </Col>
                            <Label htmlFor='crDoc' lg='1' className="text-lg-start mt-2">
                                Doc:
                            </Label>
                            <Col lg='6'>
                                <Field 
                                    className='form-control first-row-spacing' 
                                    name='crDoc' 
                                    placeholder='crDoc' />
                                <ErrorMessage name='crDoc'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor='crRev' lg='1' className="text-lg-start mt-2">
                            Revision:
                            </Label>
                            <Col lg='3'>
                                <Field 
                                    className='form-control first-row-spacing' 
                                    name='crRev' 
                                    placeholder='crRev' />
                                <ErrorMessage name='crRev'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                            <Label htmlFor='crResParty' lg='2' className="text-lg-start mt-2">
                                Responsible Party:
                            </Label>
                            <Col lg='4'>
                                <Field 
                                    className='form-control form-select first-row-spacing' 
                                    name='crResParty'
                                    placeholder='crResParty'
                                    as='select' 
                                >
                                    <option disabled value='' placeholder='name'>Select</option>
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name='crResParty'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup row className='bordered-form-group'>
                        <Label check lg={4}>
                            <Field
                                name='agree'
                                type='checkbox'
                                className='form-check-input'
                            />{' '}
                            May we contact you?
                        </Label>
                        <Col lg='4'>
                            <Field 
                                className='form-control form-select' 
                                name='contactType' 
                                as='select'
                            >
                                <option>Phone</option>
                                <option>Email</option>
                            </Field>
                        </Col>
                        <Col lg='4'>
                            <Field 
                                className='form-control' 
                                name='crContact' 
                                placeholder='Email or phone' />
                        </Col>
                    </FormGroup >
                    <FormGroup row className='bordered-form-group'>
                        
                        <Col lg='12'>
                            <Field 
                                className='form-control' 
                                name='request' 
                                as='textarea'
                                placeholder='Describe your request here...' 
                                rows='12' />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='bordered-form-group'>
                        
                            <Label htmlFor='crSign' lg='1'>
                                Name:
                            </Label>
                        <Col lg='6'>
                            <Field 
                                className='form-control form-select' 
                                name='crSign' 
                                placeholder='crSign' 
                                as='select' 
                            >
                                <option disabled value='' placeholder='name'>Select</option>
                                {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                        </Col>
                            <Label htmlFor="crDate" lg='1'>
                                Date:
                            </Label>
                        <Col lg='3'>
                            <Field
                                className='form-control'
                                name='crDate'
                                type='date'
                                placeholder='Select Date'
                            />
                            <ErrorMessage name='crSign'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Col lg={{ size: 10 }}>
                            <ButtonGroup size='lg'>
                                <Button type="submit" color="success">
                                    Enter Request
                                </Button>
                                <Button
                                    className="btn btn-danger"
                                    onClick={() => resetForm()}
                                >
                                Reset Form
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </FormGroup>
                </Form>
                )}
            </Formik>
        </Container>
    )
};

export default ChangeRequestEntryForm;