import styled from 'styled-components'
import React from 'react'

const ConsoleRight: React.FC = () => {
  return <ConsoleRightWrapper>right</ConsoleRightWrapper>
}

export default ConsoleRight

const ConsoleRightWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ccc;
`
