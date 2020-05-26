import React from 'react'
import { Row, Col, Space } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import search from '../../assets/icons/search.svg'
import user from '../../assets/icons/user.svg'
import mail from '../../assets/icons/mail.svg'
import warning from '../../assets/icons/warning.svg'

const Icon = styled.img``

const Component = styled(Space)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7.5px;
`

const Footer = () => (
  <Row>
    <Col xs={{ span: 20, offset: 2 }}>
      <Component>
        <Link to="/search" role="button" aria-label="Ir para busca"><Icon src={search} /></Link>
        <Link to="/user/56137e63-927f-4cfd-8b9b-efd827c61700" role="button" aria-label="Ir para perfil"><Icon src={user} /></Link>
        <Link to="/messages" role="button" aria-label="Ir para mensagens"><Icon src={mail} /></Link>
        <Link to="/expert-help" role="button" aria-label="Ir para ajuda profissional"><Icon src={warning} /></Link>
      </Component>
    </Col>
  </Row>

)

export default Footer