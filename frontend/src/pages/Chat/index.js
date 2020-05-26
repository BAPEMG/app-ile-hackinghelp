import React, { useState, useEffect } from 'react'
import { Spin, Row, Col } from 'antd'
import Axios from 'axios'
import styled from 'styled-components'

const URL = process.env.REACT_APP_URL

const Message = styled.div`
  background: #E2D2F1;
  margin: 10px;
  padding: 2px;
`

const Chat = () => {
  const [messages, setMessages] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Axios.get(`${URL}/messages`)
      .then(function (response) {
        setMessages(response.data.Items);
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    loading ? (
      <Spin size='large' />
    ) : (
        <Row>
          <Col xs={{ span: 20, offset: 2 }} style={{ display: 'block' }}>
            {
              messages?.map(item => (
                <Message key={item.id} style={{ order: messages.length }}>{item.message}</Message>
              )).reverse()
            }
          </Col>
        </Row >
      )
  )
}

export default Chat