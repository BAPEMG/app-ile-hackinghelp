import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Spin } from 'antd'
import { useParams } from 'react-router-dom'

import InfoUser from '../../components/InfoUser'

const URL = process.env.REACT_APP_URL

const Host = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const { userId } = useParams()

  useEffect(() => {
    Axios.get(`${URL}/users`)
      .then((response) => setUser(response.data.Items.filter(x => x.id === userId)[0]))
      .finally(() => setLoading(false))
  }, [userId])

  return (
    loading ?
      (<Spin size='large' />)
      :
      (
        <div style={{ paddingBottom: '50px' }} >
          <InfoUser user={user} />
        </div>
      )
  )
}

export default Host