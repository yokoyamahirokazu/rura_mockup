import styled from 'styled-components'
import React from 'react'
import { ReactComponent as IconCameraParent } from 'assets/icon/camera_parent.svg'
import { ReactComponent as IconCameraOnly } from 'assets/icon/camera_only.svg'
import ReactTooltip from 'react-tooltip'

interface Props {
  image?: string
  cameraName?: string
}

const Camera: React.FC<Props> = ({ image, cameraName }) => {
  return (
    <CameraBox>
      {image && <img src={`${process.env.PUBLIC_URL}/${image}`} />}
      <CameraBoxToolBar>
        <CameraBoxName>{cameraName}</CameraBoxName>
        <CameraBoxTool>
          <CameraBoxButton data-tip data-for="cameraParent">
            <IconCameraParent />
          </CameraBoxButton>
          <CameraBoxButton data-tip data-for="cameraOnly">
            <IconCameraOnly />
          </CameraBoxButton>
        </CameraBoxTool>
      </CameraBoxToolBar>
      <ReactTooltip id="cameraParent" effect="solid">
        <span>親子表示のメインにする</span>
      </ReactTooltip>
      <ReactTooltip id="cameraOnly" effect="solid">
        <span>このカメラ映像だけ表示</span>
      </ReactTooltip>
    </CameraBox>
  )
}

export default Camera

const CameraBox = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  background-color: gray;
  &::before {
    content: ' ';
    display: block;
    padding: 56.25% 0 0 0;
  }
  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  &:hover div {
    opacity: 1;
  }
`
const CameraBoxToolBar = styled.div`
  opacity: 0;
  width: 100%;
  height: 70px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.2s;
  color: #fff;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
`
const CameraBoxName = styled.span`
  font-size: 12px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 8px;
  left: 8px;
`
const CameraBoxTool = styled.div`
  height: 24px;
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const CameraBoxButton = styled.button`
  margin: 0 0 0 8px;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.75;
  & svg {
    width: 24px;
    height: 24px;
    margin: 0 0;
    & path {
      fill: #ffffff;
      color: #ffffff;
    }
  }

  &:hover {
    opacity: 1;
  }
`
