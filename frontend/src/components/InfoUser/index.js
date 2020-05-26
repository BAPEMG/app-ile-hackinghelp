import React from 'react'
import { Row, Col, Space } from 'antd'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { age } from '../../utils/generateAge'
import { ButtonIle } from '../../components/Button/index'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'

import profileImg from '../../assets/Image.svg'

const ProfileImg = styled.img`
  width:100%;
  border-radius: 50%;
  margin-bottom: 1rem;
`
const Nome = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
`
const Info = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
`
const Title = styled.h2`
  margin: 0;
  color: #573775;
  font-weight: 500;
  font-size: 20px;
`
const MiniBio = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  text-align: justify;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const InfoUser = (props) => {
  const history = useHistory()
  return (
    <div>
      <Row>
        <Col xs={{ span: 16, offset: 4 }}>
          <ProfileImg src={props.user?.photo ? props.user?.photo : profileImg} alt={`Foto de ${props.user?.full_name}`} />
        </Col>
        <Col xs={{ span: 20, offset: 2 }}>
          <Container>
            <Space direction='vertical' style={{ width: '100%' }}>
              <div>
                <Nome>{props.user?.full_name}</Nome>
                <Info aria-label={`Idade ${age(props.user?.birth_date)} anos`}>{age(props.user?.birth_date)} anos, {props.user?.city}</Info>
                <Info>{props.user?.gender}</Info>
              </div>
              <ButtonIle type='primary' onClick={() => history.push('/chat')}>Contato</ButtonIle>
            </Space>
          </Container>
          <Space direction='vertical' style={{ alignItems: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <div>
              <Title>Sobre mim</Title>
              <MiniBio>{props.user?.description}</MiniBio>
            </div>
            <Space size='large'>
              <Link to={props.user?.facebook}><img src={facebook} alt="" /></Link>
              <Link to={props.user?.instagram}><img src={instagram} alt="" /></Link>
              <Link to={props.user?.twitter}><img src={twitter} alt="" /></Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default InfoUser