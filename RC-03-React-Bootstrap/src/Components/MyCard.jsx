import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

//! react alanında döngü olarak sadece map desteklenir,conditionlardan da sadece ternary desteklenir.

const MyCard = ({veri}) => {
//!alttaki ilk return react ın ekrana bastırılan kısmı
  return (
    <Container>
      <Row>
    {veri.map(({name,text,img,id})=>{
 //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz
      return (
        <Col className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4" key={id}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      )



    })}
      </Row>
    </Container>
  )
}

export default MyCard