import React from 'react'
import {data} from "../helper/data"
import {Col, Container, Row} from "react-bootstrap"
import Player from './Player'

const CardContainer = () => {
    // console.log(data);
  return (
    <>
    {/* input acilacak  */}

    <Container>
        <Row>
            {data.map((player)=>(
                <Col key={player.name}>
                    <Player/>
                </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default CardContainer