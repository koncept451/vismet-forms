import { Container, Col } from "reactstrap";
import SubHeader from '../components/SubHeader';
import CiarEditForm from "../components/CiarEditForm";


const CiarEditPage = () => {
    return (
        <Container>
            <Col>
                <CiarEditForm />
            </Col>
        </Container>
    );
};

export default CiarEditPage;