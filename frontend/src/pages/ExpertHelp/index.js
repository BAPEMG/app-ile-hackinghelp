import React from 'react'
import { Col, Row, Space } from 'antd'
import styled from 'styled-components'

import background from '../../assets/background-help.svg'
import imagemHelp from '../../assets/img-help.svg'
import { ButtonIle } from '../../components/Button/index'


const Background = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
`
const Image = styled.img`
  height: 90vh;
`
const ImageHelp = styled.img`
  border-radius: 165px;
  width: 100%;
  max-height: 30vh;
  align-self: center;
`
const Content = styled.div`
  display: flex;
  height: 90vh;
  overflow: hidden;
`

const Title = styled.h1`
  text-align: center;
  color: #685A75;
  font-weight: 500;
  font-size: 24px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Btn = styled.a`
  color: #573775;
  font-weight: 600;
  text-decoration: underline;
  width: 60px;

  &:hover {
    opacity: '0.8';
  }
`

const ExpertHelp = () => {
  return (
    <>
      <Background>
        <ImageContainer>
          <Image src={background} />
        </ImageContainer>
      </Background>
      <Content>
        <Row style={{ width: '100%' }}>
          <Col xs={{ span: 22, offset: 1 }} >
            <Space direction="vertical" size={20} style={{ width: '100%', paddingBottom: '4rem', alignItems: 'center' }}>
              <ImageHelp src={imagemHelp} aria-hidden="true" alt="" />
              <Title>Procure ajuda especializada</Title>
              <Btn aria-label="Ligar para o Disque 100" href="tel:100" target="_blank"  rel="noopener noreferrer">Disque 100</Btn>
              <Btn aria-label="Informaçōes do CRAS" href="http://mds.gov.br/assuntos/assistencia-social/unidades-de-atendimento/cras" target="_blank"  rel="noopener noreferrer">CRAS</Btn>
              <Btn aria-label="Informaçōes do CREAS" href="http://mds.gov.br/assuntos/assistencia-social/unidades-de-atendimento/creas" target="_blank"  rel="noopener noreferrer">CREAS</Btn>
              <Btn aria-label="Informaçōes do Centro POP" href="http://www.mds.gov.br/webarquivos/publicacao/assistencia_social/Cadernos/orientacoes_centro_pop.pdf" target="_blank"  rel="noopener noreferrer">Centro POP</Btn>
            </Space>
          </Col>
        </Row>
      </Content>
    </>
  )
}

export default ExpertHelp