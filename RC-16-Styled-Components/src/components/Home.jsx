import React from 'react'
import DivStyle from './style/ContainerStyle'
import HeaderS, { LinkS } from './style/HeaderStyle'

const Home = () => {
  return (
    <DivStyle>
        <HeaderS>STYLED COMPONENTS</HeaderS>
        <LinkS href="##">LINK</LinkS>
        <button>TIKLA1</button>
        <button>TIKLA2</button>
        <button>TIKLA3</button>
        <button>TIKLA4</button>
        <button>TIKLA5</button>
    </DivStyle>
  )
}

export default Home