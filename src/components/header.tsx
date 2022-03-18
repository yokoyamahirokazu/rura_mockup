import styled from 'styled-components'
import TextButton from 'components/atoms/textButton'
import React from 'react'
import LogoImage from 'assets/images/rura_logo_blue.svg'

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <HeaderLogo>
        <img src={LogoImage} alt="RURA LOGO" />
      </HeaderLogo>
      <HeaderContent>
        <ButtonBox>
          <TextButton
            onClick={() => console.log('click!')}
            children="デバイス設定"
            icon="デバイス設定"
          />
        </ButtonBox>
        <ButtonBox>
          <TextButton onClick={() => console.log('click!')} icon="ヘルプ" />
        </ButtonBox>
        <ButtonBox>
          <TextButton
            onClick={() => console.log('click!')}
            children="デモスタッフ"
            staffname="デモスタッフ"
            userImage="dog.png"
          />
        </ButtonBox>
      </HeaderContent>
    </HeaderBox>
  )
}

export default Header

const HeaderBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  background-color: var(--white);
`

const HeaderContent = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const HeaderLogo = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 90px;
  height: 20px;
`

const ButtonBox = styled.div`
  margin: 0 0 0 8px;
`
