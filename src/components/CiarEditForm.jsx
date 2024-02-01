import React, { useState, useEffect } from "react";
import { Button, Label, Col, FormGroup, Row, ButtonGroup, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../App.css'; 


const CiarEditForm = () => {
    
    const [options, setOptions] = useState([]);
    const [ ciarNumber, setCiarNumber] = useState(1015);
    const [selectedType, setSelectedType] = useState("");


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
        setCiarNumber((prevCiarNumber) => prevCiarNumber )
    };
    
    return(
        <Container>
        <h1 className="form-header">CIAR #{ciarNumber}</h1>
        <Formik
            onSubmit={handleSubmit}
            //validate={validateEntryForm} //NEED TO ADD VALIDATION STEPS FOR EACH FIELD
            initialValues={{
                ciarNumber: ciarNumber,
                ciarType: '',
                crDoc: '',
                crRev: '',
                ciarResParty: '',
                ciarSign: '',
                agree: false,
                contactType: '',
                request: '',
                crDate: '',
                crContact: '',
                ciarIssue: '',
                carClaim: '',
                carCustPart: '',
                carCustomer: '',
                carSalesOrder: '',
                carCustomerPO: '',
                scarClaim: '',
                scarLine: '',
                scarRMA: '',
                scarVendor: '',
                scarVistaPO: '',
                scarVendorPart: ''
            }}
            >
            {({ values, setFieldValue, resetForm }) => (
            <Form>
                <FormGroup row className='bordered-form-group'>
                    <Row>
                        <Label htmlFor='ciarRecNumber' md='1' className='text-md-center text-lg-start mt-2'>
                        CIAR:
                        </Label>
                        <Col lg='2'>
                                <Field 
                                    className='form-control first-row-spacing' 
                                    name='ciarRecNumber' 
                                    disabled
                                    value={ciarNumber}
                                    
                                >
                        
                                </Field> 
                                <ErrorMessage name='ciarRecNumber'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                        </Col>
                        <Label htmlFor='ciarType' lg='1' className='text-md-start mt-2'>
                            Type:
                        </Label>
                        <Col lg='2'>
                                <Field 
                                    className='form-control form-select first-row-spacing' 
                                    name='ciarType'  
                                    as='select'
                                    value={values.ciarType}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSelectedType(value);
                                        // Also set the field's value for Formik
                                        setFieldValue("ciarType", value);
                                    }} 
                                >
                                    <option value='' placeholder disabled>select</option>
                                    <option value='CAR'>CAR</option>
                                    <option value='SCAR'>SCAR</option>
                                </Field>
                                    
                                <ErrorMessage name='ciarType'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                        </Col>
                        <Label htmlFor='ciarIssue' lg='1' className='text-md-start mt-2'>
                        Issue:
                        </Label>
                        <Col lg='2'>
                                <Field 
                                    className='form-control form-select first-row-spacing' 
                                    name='ciarIssue'
                                    as='select'
                                >
                                    <option value='' disabled>select</option>
                                    <option value='Width'>Width - Out of Spec</option>
                                    <option value='Gauge'>Gauge - Out of Spec</option>
                                    <option value='Camber'>Camber - Out of Spec</option>
                                    <option value='Burr'>Burr - Out of Spec</option>
                                    <option value='Phys'>Does not meet - Physical Props</option>
                                    <option value='Chem'>Does not meet - Chemical Props</option>
                                    <option value='Scratches'>Surface - Scuff/Scratches</option>
                                    <option value='Delam'>Surface - Delamination</option>
                                    <option value='RollMarks'>Surface - Roll Marks</option>
                                    <option value='KnifeMarks'>Surface - Knife Marks</option>
                                    <option value='Other'>Other</option>
                                </Field>
                                    
                                <ErrorMessage name='ciarIssue'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor='ciarAssignedTo' lg='1' className='text-md-start mt-2'>
                            Initiated By:
                        </Label>
                        <Col lg='2'>
                        <Field 
                                className='form-control form-select second-row-spacing' 
                                name='ciarAssignedTo'
                                placeholder='ciarAssignedTo'
                                as='select'
                                
                            >
                                <option disabled value='' placeholder>select</option>
                                <option>Supplier</option>
                                <option>Customer</option>
                                <option>Internal</option>
                                
                            </Field>
                            <ErrorMessage name='ciarAssignedTo'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Label htmlFor='crRev' lg='1' className='text-md-start mt-2'>
                        Assigned to:
                        </Label>
                        <Col lg='2'>
                        <Field 
                                className='form-control form-select second-row-spacing' 
                                name='ia'
                                placeholder='ciarAssignedTo'
                                as='select' 
                            >
                                <option disabled value='' placeholder>select</option>
                                {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name='crRev'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    
                        <Label htmlFor='ciarResParty' lg='1' className='text-md-start mt-2'>
                            Entered by:
                        </Label>
                        <Col lg='2'>
                            <Field  
                                className='form-control form-select second-row-spacing' 
                                name='ciarInitiator'
                                placeholder='ciarInitiator'
                                as='select' 
                            >
                                <option disabled value='' placeholder>select</option>
                                {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name='ciarInitiator'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                   </Row>
                </FormGroup>

                {selectedType === 'CAR' && (
                <FormGroup row className='bordered-form-group'>
                    <Row>
                        <Label htmlFor='carClaim' lg='1' className='text-md-start mt-2'>Claim:</Label>
                        <Col lg='2'>
                            <Field className='form-control first-row-spacing' name='carClaim' placeholder='Enter claim number'/>
                        </Col>
            
                        <Label htmlFor='carCustomer' lg='1' className='text-md-start mt-2'>Customer:</Label>
                        <Col lg='3'>
                            <Field className='form-control first-row-spacing' disabled name='carCustomer' placeholder=''/>
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor='carSalesOrder' lg='1' className='text-md-start mt-2'>Sales Order:</Label>
                        <Col lg='2'>
                            <Field className='form-control first-row-spacing' disabled name='carSalesOrder' placeholder=''/>
                        </Col>
            
                        <Label htmlFor='carCustomerPO' lg='1' className='text-md-start mt-2'>Customer PO:</Label>
                        <Col lg='3'>
                            <Field className='form-control first-row-spacing' disabled name='carCustomerPO' placeholder=''/>
                        </Col>
                        <Label htmlFor='carCustPart' lg='1' className='text-md-start mt-2'>Customer Part:</Label>
                        <Col lg='4'>
                            <Field className='form-control first-row-spacing' disabled name='carCustPart'/>
                        </Col>
                    </Row>
                </FormGroup>
                )}

                {selectedType === 'SCAR' && (
                <FormGroup row className='bordered-form-group'>
                    <Row>
                        <Label htmlFor='scarClaim' lg='1' className='text-md-start mt-2'>Claim:</Label>
                        <Col lg='2'>
                            <Field className='form-control first-row-spacing' name='scarClaim' placeholder='Enter claim number'/>
                        </Col>
            
                        <Label htmlFor='scarLine' lg='1' className='text-md-start mt-2'>Line:</Label>
                        <Col lg='1'>
                            <Field className='form-control first-row-spacing' disabled name='scarLine' placeholder=''/>
                        </Col>
                        <Label htmlFor='scarRMA' lg='1' className='text-md-start mt-2'>Supplier RMA:</Label>
                        <Col lg='2'>
                            <Field className='form-control first-row-spacing' disabled name='scarRMA' placeholder=''/>
                        </Col>
            
                        <Label htmlFor='scarVendor' lg='1' className='text-md-start mt-2'>Vendor:</Label>
                        <Col lg='3'>
                            <Field className='form-control first-row-spacing' disabled name='scarVendor' placeholder=''/>
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor='scarVistaPO' lg='1' className='text-md-start mt-2'>Vista PO:</Label>
                        <Col lg='2'>
                            <Field className='form-control first-row-spacing' disabled name='scarVistaPO' placeholder=''/>
                        </Col>
                        <Label htmlFor='scarVendorPart' lg='1' className='text-md-start mt-2'>Vendor Part:</Label>
                        <Col lg='3'>
                            <Field className='form-control first-row-spacing' disabled name='scarVendorPart' placeholder=''/>
                        </Col>
                    </Row>
                </FormGroup>
                )}

                <FormGroup row className='bordered-form-group'>
                    <Label check md={4} >
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        May we contact you?
                    </Label>
                    <Col md='4'>
                        <Field 
                            className='form-control form-select' 
                            name='contactType' 
                            as='select'
                        >
                            <option disabled value='' placeholder>Preferred</option>
                            <option>Phone</option>
                            <option>Email</option>
                        </Field>
                    </Col>
                    <Col md='4'>
                        <Field 
                            className='form-control' 
                            name='crContact' 
                            placeholder='email or phone' />
                    </Col>
                </FormGroup>
                <FormGroup row className='bordered-form-group'>
                    <Col lg='10'>
                        <Field 
                            className='form-control' 
                            name='request' 
                            as='textarea'
                            placeholder='Describe your issue here...' 
                            rows='12' />
                        <br></br>
                        <Field 
                            className='form-control' 
                            name='request' 
                            as='textarea'
                            placeholder='Add private notes here...' 
                            rows='12' />
                    </Col>
                </FormGroup>
                <FormGroup row className='bordered-form-group'>
                    
                        <Label htmlFor='ciarSign' lg='1' >
                            Name:
                        </Label>
                    <Col lg='2'>
                        <Field 
                            className='form-control form-select' 
                            name='ciarSign' 
                            placeholder='ciarSign' 
                            as='select' 
                        >
                            <option disabled value='' placeholder='name'>select</option>
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
                    <Col lg='2'>
                        <Field
                            className='form-control'
                            name='crDate' // Assuming 'crDate' is the name for the date field
                            type='date'
                            placeholder='Select Date'
                        />
                        <ErrorMessage name='ciarSign'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10 }}>
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

export default CiarEditForm;