import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Space } from 'antd'
import backgroundOne from '../../assets/background-home-1.svg'
import backgroundTwo from '../../assets/background-home-2.svg'
import imageHome from '../../assets/img-home.svg'
import styled from 'styled-components'
import { ButtonIle } from '../../components/Button'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: absolute;
  max-height: 100vh;
  overflow: hidden;
  max-width: 100vw;
`

const Image = styled.img`
  max-width: 100%;
`

const ImageHome = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  max-height: 40vh;
`

const Content = styled.div`
  padding-bottom: 4rem; 
  display: flex;
  align-items: flex-end;
  height: 90vh;
`

const Home = () => {
  const history = useHistory()
  return (
    <>
      <Background role="presentation">
        <Row>
          <Col xs={{ span: 22, offset: 1 }} >
            <ImageHome src={imageHome} role="img" alt="Mulher jovem, com uma bolsa, indo para uma casa" />
          </Col>
        </Row>
        <Image src={backgroundOne} role="img" alt="" aria-hidden="true" />
        <Image src={backgroundTwo} role="img" alt="" aria-hidden="true" />
      </Background>
      <Content>
        <Row style={{ width: '100%' }}>
          <Col xs={{ span: 14, offset: 5 }} >
            <Space direction="vertical" style={{ width: '100%' }}>
              <ButtonIle type="primary" onClick={() => history.push('/search')}>Quero acolhimento</ButtonIle>
              <ButtonIle type="dashed" onClick={() => history.push('/search')}>Quero acolher</ButtonIle>
              <ButtonIle type="link" onClick={() => history.push('/')}>Esqueceu sua senha?</ButtonIle>
            </Space>
          </Col>
        </Row>
      </Content>
    </>
  )
}

export default Home 