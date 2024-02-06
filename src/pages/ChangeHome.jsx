import { Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SubHeader from '../components/SubHeader';
import '../App.css';


const ChangeHome = () => {
    const customButtonStyle = {
        fontSize: '60px',
        height: '200px'
    }

    return (
        <Container className="mt-4">
            <Container>
                <Row>
                    <Col className="homepage-button" lg='6'>
                        <Link to='new' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Enter New Change Request</Button>
                        </Link>
                    </Col>
                    <Col className="homepage-button" lg='6'>
                        <Link to='edit' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Edit Existing Change Request</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ChangeHome;