import { Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SubHeader from '../components/SubHeader';
import '../App.css';


const CiarHome = () => {
    const customButtonStyle = {
        height: '200px',
        fontSize: '60px'
    }

    return (
        <Container className="mt-4">
            <SubHeader current="CIARs" previous={true} />
            <Container>
                <Row>    
                    <Col className="homepage-button" lg='6'>
                        <Link to='new' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Enter New CIAR</Button>
                        </Link>
                    </Col>
                    <Col className="homepage-button" lg='6'>
                        <Link to='edit' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button size="lg" style={customButtonStyle} block>Edit Existing CIAR</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CiarHome;