import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Routes from './Routes'
import { Layout } from 'antd'
import HeaderApp from './components/Header'
import FooterApp from './components/Footer'
import DesktopInDev from './pages/DesktopInDev'
import 'antd/dist/antd.css'
import './App.css'

const { Header, Content, Footer } = Layout

function App() {
  const location = useLocation();
  const [mobileView, setMobileView] = useState(true)

  const handleResize = () => {
    setMobileView(window.innerWidth < 770)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout>
      {
        !mobileView ? (
          <DesktopInDev />
        ) : (
            <>
              {
                location.pathname === '/' ? (
                  <Routes />
                ) : (
                    <>
                      <Header>
                        <HeaderApp>
                          {location.pathname === '/messages' && 'Mensagens'}
                          {location.pathname === '/user' && 'Perfil'}
                        </HeaderApp>
                      </Header>
                      <Content>
                        <div style={{ height: '100%' }}>
                          <Routes />
                        </div>
                      </Content>
                      <Footer>
                        <FooterApp />
                      </Footer>
                    </>
                  )
              }
            </>
          )
      }
    </Layout>
  )
}

export default App
