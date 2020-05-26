import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import InfoUser from '../../components/InfoUser'

const URL = process.env.REACT_APP_URL

const Guest = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    Axios.get(`${URL}/users/56137e63-927f-4cfd-8b9b-efd827c61700`)
      .then(function (response) {
        setUser(response.data);
      });
  }, [])

  return (
    <InfoUser user={user.Item} />
  )
}

export default Guest