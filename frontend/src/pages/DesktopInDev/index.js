import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col, Space } from 'antd'
import styled from 'styled-components'

import { ButtonIle } from '../../components/Button/index'

import logo from '../../assets/logo.svg'

const Title = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  width: 650px;
  line-height: 48px;
`

const Text = styled.p`
  margin: 0;
`

const Span = styled.span`
  color: #573775;
`

const DesktopInDev = () => {
  return (
    <Row style={{ paddingTop: '3rem'}}>
      <Col xs={{ span: 18, offset: 2 }}>
        <Space direction="vertical" size={20}>
          <Link to="/"><img src={logo} alt="" /></Link>
          <Text>Sim, teremos uma versão desktop em breve, mas</Text>
          <Title>Estamos em fase de desenvolvimento <br></br><Span>acesse o site pelo celular</Span></Title>
          <Space direction="vertical"  style={{ paddingTop: '4rem'}}>
            <a href="mailto:ile.bapemg@gmail.com" target="_blank"  rel="noopener noreferrer">
              <ButtonIle type="primary">Saiba mais sobre nós</ButtonIle>
            </a>
            <a href="mailto:ile.bapemg@gmail.com" target="_blank"  rel="noopener noreferrer">
              <ButtonIle type="dashed">Invista na humanização</ButtonIle>
            </a>
          </Space>
        </Space>
      </Col>
    </Row>
  )
}

export default DesktopInDev
