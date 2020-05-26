import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Col, Row, Spin } from 'antd'
import Card from '../../components/Card/index'
import styled from 'styled-components'

import search from '../../assets/icons/search.svg'

const URL = process.env.REACT_APP_URL

const Input = styled.div`
  width: 100%;
  height: 35px;
  border-radius: 35px;
  border: 1px solid #dcdce6;
  display: flex;
  margin: 1rem 0 2rem 0;
  background: #FFFFFF;

  input {
    background: #FFFFFF;
    border: none;
    margin: 0 1rem 0 3rem;
    color: rgba(0, 0, 0, 0.38);
    width: 100%
  }

  img {
    width: 27px;
    height: 27px;
    align-self: center;
    position: absolute;
    margin-left: 1rem;
  }
`

const Search = () => {

  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Axios.get(`${URL}/users`)
      .then(function (response) {
        setUsers(response.data.Items);
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    loading ? (
      <Spin />
    ) : (
      <Row style={{ marginBottom: '80px', paddingBottom: '50px' }}>
        <Col xs={{ span: 20, offset: 2 }} >
          <Input>
            <img src={search} alt="" />
            <input placeholder='Digite sua busca' />
          </Input>
        </Col>
        {
          users && users?.map((user) => <Card user={user} key={user.id} />)
        }
      </Row>
    )
  )
}

export default Search