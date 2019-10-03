import React from 'react'
import Number from './Number';
import styled from 'styled-components';

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

function Numbers({ numbers, euroNumbers }) {
  console.log(numbers);
  return (
    <NumbersContainer>
      {numbers.map((number, index) => (
        <Number number={number} key={index}></Number>
      ))}
      {euroNumbers.map((number, index) => (
        <Number number={number} key={index} euro={true}></Number>
      ))}
    </NumbersContainer>
  )
}

export default Numbers
