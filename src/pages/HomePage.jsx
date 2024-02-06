import { Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SubHeader from '../components/SubHeader';
import '../App.css';


const HomePage = () => {
    const customButtonStyle = {
        height: '200px',
        fontSize: '60px'
    }

    return (
        <Container className="mt-4">
            <Container>
                <Row>
                    <Col className="homepage-button" lg='6'>
                        <Link to='/ciar' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>CIARs</Button>
                        </Link>
                    </Col>
                    <Col className="homepage-button" lg='6'>
                        <Link to='/change-request' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Change Requests</Button>
                        </Link>
                    </Col>
                </Row>
                {/* <Row>    
                    <Col className="homepage-button" lg='6'>
                        <Link to='/ciar-entry' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Enter New CIAR</Button>
                        </Link>
                    </Col>
                    <Col className="homepage-button" lg='6'>
                        <Link to='/ciar-edit' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Edit Existing CIAR</Button>
                        </Link>
                    </Col>
                </Row> */}
            </Container>
        </Container>
    );
};

export default HomePage;