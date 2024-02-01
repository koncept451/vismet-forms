import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/change-request-entry'>Change Request Entry</Link>
                            </li>
                            <li>
                                <Link to='/change-request-edit'>Change Request Edit</Link>
                            </li>
                            <li>
                                <Link to='/ciar-entry'>CIAR Entry</Link>
                            </li>
                            <li>
                                <Link to='/ciar-edit'>CIAR Edit</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <h5>To report bugs:</h5>
                        <Button onClick={() => window.open('mailto:julian@vismet.com?subject=Bug%20Report', '_blank', 'noopener,noreferrer')}>
                            <i className='fa fa-envelope-o' /> Contact Julian
                        </Button>
                            
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;