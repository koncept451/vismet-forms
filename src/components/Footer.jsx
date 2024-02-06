import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
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