import styled from 'styled-components'
import React from 'react'

import { ReactComponent as IconSetting } from 'assets/icon/setting.svg'
import { ReactComponent as IconHelp } from 'assets/icon/help.svg'
import Dog from 'assets/images/dog.png'

interface Props {
  children?: React.ReactNode
  icon?: string
  userImage?: string
  staffname?: string
  onClick: () => void
}

const TextButton: React.FC<Props> = ({
  children,
  onClick,
  icon,
  userImage,
  staffname,
}) => {
  return (
    <SimpleTextButton onClick={onClick}>
      {userImage && (
        <UserImage>
          <img src={Dog} alt={staffname} />
        </UserImage>
      )}
      {icon === 'デバイス設定' && <IconSetting />}
      {icon === 'ヘルプ' && <IconHelp />}
      {children}
    </SimpleTextButton>
  )
}

export default TextButton

const SimpleTextButton = styled.button`
  text-align: center;
  cursor: pointer;
  font-size: inherit;
  font-size: 14px;
  padding: 3px;
  border-radius: 2px;
  line-height: normal;
  border: none;
  background-color: none;
  background: none;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--dark-050);
  }
  &:active {
    background-color: var(--dark-100);
  }
  & svg {
    width: 20px;
    height: 20px;
    margin: 0 2px 0 0;
  }
`

const UserImage = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 3px 0 0;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
