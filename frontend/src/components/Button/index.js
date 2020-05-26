import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'


export const ButtonIle = ({ children, onClick, type }) => {
  const Btn = styled(Button)`
    background-color: ${type === 'primary' && '#573775 !important'} ${type === 'dashed' && 'white !important'};
    color: ${type === 'primary' && 'white !important'} ${(type === 'dashed' || type === 'link') && '#573775 !important'};
    border-radius: 8px !important;
    font-weight: 600 !important;
    border-color: transparent !important;
    border: ${type === 'dashed' && '1px solid #573775 !important'};
    text-decoration: ${type === 'link' && 'underline'};

    &:hover {
      background-color: ${type === 'dashed' && '#573775 !important'};
      color: ${type === 'dashed' && 'white !important'};
      opacity: ${type === 'primary' && '0.8'};
    }
  `

  return (
    <Btn onClick={onClick} type={type} block>{children}</Btn>
  )
}
