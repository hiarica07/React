import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import data from "../data"
import { useNavigate } from "react-router-dom";
// import {Button} from "react-bootstrap";

//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir

const CourseCard = () => {

  const navigate=useNavigate()
  

  //!alttaki ilk return react ın ekrana bastırılan kısmı
  return (
    <Container>
      <Row className="g-3 text-center">
        {data.map((a) => {
          const {id,name,img,text} = a;
          //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz

          //?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img
          return (
            <Col
              className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4"
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name} </Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button onClick={()=>navigate(`/courses/${name}` , {state:{a}})} variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;