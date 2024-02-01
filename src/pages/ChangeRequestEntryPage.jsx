import { Col, Container } from "reactstrap";
import ChangeRequestEntryForm from "../components/ChangeRequestEntryForm";

const ChangeRequestEntryPage = () => {
    return (
        <Container>
            <Col md='10'>
                <ChangeRequestEntryForm />
            </Col>
        </Container>
    );
};

export default ChangeRequestEntryPage;