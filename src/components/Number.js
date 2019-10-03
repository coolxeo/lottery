import React from 'react'
import styled from 'styled-components'

const NumberContainer = styled.div`
  border: 1px solid ${props => props.euro ? '#ca7f26' : '#999'};
  border-radius: 50%;
  padding: 5px;
  margin: 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
`

function Number({number, euro}) {
  return (
    <NumberContainer euro={euro}>{number}</NumberContainer>
  )
}

export default Number
