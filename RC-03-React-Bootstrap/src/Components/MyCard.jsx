import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

//! react alanında döngü olarak sadece map desteklenir,conditionlardan da sadece ternary desteklenir.

const MyCard = ({veri}) => {

  return (
    <Container>
      <Row>
    {veri.map((a)=>{

      return (
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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