import { Col, Container } from "reactstrap";
import ChangeRequestEntryForm from "../components/ChangeRequestEntryForm";
import CiarEntryForm from "../components/CiarEntryForm";
import SubHeader from "../components/SubHeader";

const CiarEntryPage = () => {
    return (
        <Container>
        <SubHeader current="New CIAR" detail={true} />
            <Container>
                <Col >
                    <CiarEntryForm/>
                </Col>
            </Container>
        </Container>
    );
};

export default CiarEntryPage;