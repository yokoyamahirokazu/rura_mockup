import Header from 'components/header'
import styled from 'styled-components'

export const Home = () => {
  return (
    <>
      <Header />
      <Contents>
        <h1>index</h1>
      </Contents>
    </>
  )
}

export default Home

const Contents = styled.div`
  position: absolute;
  left: 0;
  top: 45px;
  width: 100%;
  height: calc(100vh - 45px);
`
