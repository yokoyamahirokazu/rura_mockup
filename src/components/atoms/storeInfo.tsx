import styled from 'styled-components'
import React from 'react'
import { ReactComponent as IconAndroid } from 'assets/icon/android.svg'
import { ReactComponent as IconDisplay } from 'assets/icon/display.svg'
import { ReactComponent as IconVolume } from 'assets/icon/volume_high.svg'
import { ReactComponent as IconSizeSmall } from 'assets/icon/camera_size_small.svg'
import { ReactComponent as IconSizeLarge } from 'assets/icon/camera_size_large.svg'
import ReactTooltip from 'react-tooltip'

interface Props {
  name?: string
  deviceType?: string
}

const StoreInfo: React.FC<Props> = ({ name, deviceType }) => {
  return (
    <StoreInfoBox>
      <StoreName>{name}</StoreName>
      <ToolBar>
        {deviceType === 'android' && (
          <DeviceType>
            <IconAndroid />
            android
          </DeviceType>
        )}
        {deviceType === 'pc' && (
          <DeviceType>
            <IconDisplay />
            PC
          </DeviceType>
        )}
        <VolumeButton data-tip data-for="storeVolume">
          <IconVolume />
        </VolumeButton>

        <CameraSizeButton data-tip data-for="cameraSmall">
          <IconSizeSmall />
        </CameraSizeButton>
        <CameraSizeButton data-tip data-for="cameraLarge">
          <IconSizeLarge />
        </CameraSizeButton>
      </ToolBar>

      <ReactTooltip id="storeVolume" effect="solid">
        <span>店舗側音量</span>
      </ReactTooltip>
      <ReactTooltip id="cameraSmall" effect="solid">
        <span>最小化</span>
      </ReactTooltip>
      <ReactTooltip id="cameraLarge" effect="solid">
        <span>最大化</span>
      </ReactTooltip>
    </StoreInfoBox>
  )
}

export default StoreInfo

const StoreInfoBox = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`
const StoreName = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`
const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  width: calc(100% - 200px - 16px);
  flex-wrap: nowrap;
  position: absolute;
  right: 16px;
  top: 0;
`
const DeviceType = styled.span`
  font-size: 12px;
  display: flex;
  align-items: center;
  & svg {
    width: 20px;
    height: 20px;
    margin: 0 3px 0 0;
  }
`

const VolumeButton = styled.button`
  margin: 0 0 0 12px;
  border: 0;
  padding: 3px;
  border-radius: 4px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.75;
  & svg {
    width: 30px;
    height: 30px;
    margin: 0 0;
  }
  &:hover {
    opacity: 1;
  }
`

const CameraSizeButton = styled.button`
  margin: 0 0 0 12px;
  border: 0;
  padding: 3px;
  border-radius: 4px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.75;
  & svg {
    width: 30px;
    height: 30px;
    margin: 0 0;
  }
  &:hover {
    opacity: 1;
  }
`
