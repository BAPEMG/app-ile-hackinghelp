import React from 'react'
import { Col, Row } from 'antd'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { age } from '../../utils/generateAge'

import bookmark from '../../assets/icons/bookmark.svg'
import foto from '../../assets/Image.svg'

const Photo = styled.img`
  border-radius: 0px 39px 39px 0px;
  max-width: 100%
`
const Info = styled.span`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.15px;
  color: black;
`
const City = styled.p`
  font-size: 12px;
  letter-spacing: 0.25px;
  color: black;
  margin: 0;
`
const MiniBio = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  letter-spacing: 0.25px;
`
const Tag = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
`

const Button = styled.button`
background: #573775;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
color: #FDFEFF;
`

const Card = (props) => {
  const history = useHistory()
  return (
    <Row style={{ marginBottom: '1rem' }}>
      <Col xs={{ span: 24 }}>
        <Row>
          <Col xs={{ span: 10 }} style={{ alignSelf: 'center' }}>
            <Photo src={props.user.photo ? props.user.photo : foto} alt={`Foto de ${props.user.full_name}`} />
          </Col>
          <Col xs={{ span: 12, offset: 1 }}>
            <Info aria-label={`Idade ${age(props.user?.birth_date)} anos`}>{props.user.full_name}, {age(props.user.birth_date)}</Info>
            <City aria-label={`Mora na cidade ${props.user.city}`}>{props.user.city}</City>
            <MiniBio>{props.user.description}</MiniBio>
            <Row style={{ marginTop: '5px' }}>
              <Col xs={{ span: 9 }}>
                <Tag>Acolhedor Ouro <img src={bookmark} alt="" /></Tag>
              </Col>
              <Col xs={{ span: 12, offset: 3 }}>
                <Button onClick={() => history.push(`/user/${props.user.id}`)} aria-label={`Ver perfil de ${props.user.full_name}`}>Ver perfil</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>

  )
}

export default Card