import { Col, Container } from "reactstrap";
import ChangeRequestEntryForm from "../components/ChangeRequestEntryForm";
import CiarEntryForm from "../components/CiarEntryForm";

const CiarEntryPage = () => {
    return (
        <>
        <Container>
            <Col >
                <CiarEntryForm/>
            </Col>
        </Container>
        </>
    );
};

export default CiarEntryPage;