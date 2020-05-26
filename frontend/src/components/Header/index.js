import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import { Link } from "react-router-dom";
import styled from 'styled-components'

import arrow from '../../assets/icons/arrow.svg'
import logo from '../../assets/logo.svg'

const Text = styled.div`
  font-weight: 500;
  color: #573775;
  font-size: 20px;
`

const Header = ({children}) => {
  const history = useHistory()

  return (
    <Row>
      <Col xs={{ span: 3, offset: 1 }}>
        <div onClick={() => history.goBack()} aria-label="Voltar" role="button"><img src={arrow} alt="" /></div>
      </Col>
      <Col xs={{ span: 12 }}>
        <Text>{children}</Text>
      </Col>
      <Col xs={{ span: 3, offset: 1 }}>
        <Link to="/" role="button" aria-label="Voltar para o inicio"><img src={logo} alt="" aria-hidden={true} /></Link>
      </Col>
    </Row>
  )
}

export default Header