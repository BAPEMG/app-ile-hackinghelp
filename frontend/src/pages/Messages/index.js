import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Spin, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'
import profileImg from '../../assets/Image.svg'
import styled from 'styled-components'

const URL = process.env.REACT_APP_URL

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`
const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: black;
`

const Messages = () => {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    Axios.get(`${URL}/users`)
      .then(function (response) {
        setUsers(response.data.Items);
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    loading ? (
      <Spin size='large' />
    ) : (
      <Row style={{ marginBottom: '80px', paddingBottom: '50px' }}>
        <Col xs={{ span: 20, offset: 2 }}>
          {
            users && users?.map((user) => {
              return (
                <div onClick={() => history.push('/chat')} key={user.id}>
                  <Row style={{ padding: '10px' }}>
                    <Col xs={{ span: 8 }} style={{ alignSelf: 'center' }}>
                      <ProfileImg src={user.photo ? user.photo : profileImg} alt="" />
                    </Col>
                    <Col xs={{ span: 16 }}>
                      <Name>{user.full_name}</Name>
                      <p>Oi, vi que tás procurando por abrigo. Me conta mais da tua história?</p>
                    </Col>
                  </Row>
                </div>
              )
            })
          }
        </Col>
      </Row>
    )
  )
}

export default Messages