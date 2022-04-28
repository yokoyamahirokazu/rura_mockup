import Header from 'components/header'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import {
  Box,
  Flex,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  useControllableState,
} from '@chakra-ui/react'

import { ReactComponent as IconAndroid } from 'assets/icon/android.svg'
import { ReactComponent as IconDisplay } from 'assets/icon/display.svg'
import { ReactComponent as IconVolume } from 'assets/icon/volume_high.svg'
import { ReactComponent as IconVideo } from 'assets/icon/viedo.svg'
import { useState, useRef, useEffect } from 'react'

const shopPcVolumeSliderProps = { bgColor: 'primary.500' }

export const ShopInfoDemo = () => {
  const STORE = [
    {
      id: 1,
      name: '店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名店舗名',
      deviceType: 'android',
    },
  ]

  const [leftWidth, setleftWidth] = useState(0)
  const [shopNameWidth, setshopNameWidth] = useState(0)
  const [shopInfoRightWidth, setshopInfoRightWidth] = useState(0)

  const leftRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setleftWidth(entries[0].contentRect.width)
    })
    leftRef.current && observer.observe(leftRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  const shopNameRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setshopNameWidth(entries[0].contentRect.width)
    })
    shopNameRef.current && observer.observe(shopNameRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  const shopInfoRightRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setshopInfoRightWidth(entries[0].contentRect.width)
    })
    shopInfoRightRef.current && observer.observe(shopInfoRightRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  console.log('leftWidth:' + leftWidth)
  console.log('shopNameWidth' + shopNameWidth)
  console.log('shopInfoRightWidth' + shopInfoRightWidth)

  const [deviceName, setdeviceName] = useControllableState({
    defaultValue: 'block',
  })
  const totalWidth = leftWidth - 214

  const [shopNameMaxWidth, setshopNameMaxWidth] = useControllableState({
    defaultValue: '340px',
  })
  const [VolumeMaxWidth, setVolumeMaxWidth] = useControllableState({
    defaultValue: '200px',
  })
  const [selectMaxWidth, setselectMaxWidth] = useControllableState({
    defaultValue: '220px',
  })
  const [shopNameSize, setshopNameSize] = useControllableState({
    defaultValue: '20px',
  })
  const [paddingLeft, setpaddingLeft] = useControllableState({
    defaultValue: '24px',
  })

  if (leftWidth - shopNameWidth - 108 < shopInfoRightWidth + 30) {
    setdeviceName('none')
  } else {
    setdeviceName('block')
  }
  if (leftWidth < 980) {
    setshopNameMaxWidth(totalWidth * 0.43 + 'px')
    setVolumeMaxWidth(totalWidth * 0.27 + 'px')
    setselectMaxWidth(totalWidth * 0.3 + 'px')
    setpaddingLeft('16px')
    setshopNameSize('18px')
  } else {
    setshopNameMaxWidth('340px')
    setVolumeMaxWidth('200px')
    setselectMaxWidth('220px')
    setshopNameSize('20px')
    setpaddingLeft('24px')
  }

  return (
    <>
      <Header />
      <Contents
        style={{
          width: '100%',
          height: 'calc(100vh - 45px)',
          display: 'flex',
          flexFlow: 'nowrap column',
          overflow: 'hidden',
          borderTop: 'var(--border-light)',
        }}
      >
        <div
          style={{
            flexGrow: '3',
            display: 'flex',
            flexFlow: 'row nowrap',
          }}
        >
          <div
            style={{
              flexGrow: '2',
              width: '55%',
              minWidth: '576px',
            }}
            ref={leftRef}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--bg-color)',
              }}
            >
              <div
                style={{
                  maxWidth: 'calc( (100vh - 295px) / 0.5625)',
                  minWidth: '360px',
                  margin: '0 a48o',
                }}
              >
                <CameraBox>
                  <img src={`${process.env.PUBLIC_URL}/camera_front.png`} />
                </CameraBox>
              </div>

              {STORE.map((store) => {
                return (
                  <Box h="60px" position="relative">
                    <Box position="absolute" left="0" top="0">
                      <Flex
                        alignItems="center"
                        justifyContent="flex-start"
                        h="60px"
                        pl={paddingLeft}
                      >
                        <Text
                          fontSize={shopNameSize}
                          fontWeight="600"
                          m="0"
                          p="0"
                          maxW={shopNameMaxWidth}
                          isTruncated
                          ref={shopNameRef}
                        >
                          {store.name}
                        </Text>
                        <Flex flexWrap="nowrap" alignItems="center" ml="16px">
                          <IconBoxSmall data-tip data-for="deviceType">
                            {store.deviceType === 'android' && <IconAndroid />}
                            {store.deviceType === 'pc' && <IconDisplay />}
                          </IconBoxSmall>
                          <Text
                            fontSize="12px"
                            m="0 0 0 3px"
                            display={deviceName}
                          >
                            {store.deviceType === 'android' && 'android'}
                            {store.deviceType === 'pc' && 'PC'}
                          </Text>
                          <ReactTooltip id="deviceType" effect="solid">
                            <span>
                              {store.deviceType === 'android' && 'android'}
                              {store.deviceType === 'pc' && 'PC'}
                            </span>
                          </ReactTooltip>
                        </Flex>
                      </Flex>
                    </Box>
                    <Flex
                      position="absolute"
                      right="12px"
                      top="50%"
                      transform="translate(0,-50%)"
                      ref={shopInfoRightRef}
                    >
                      <Flex alignItems="center">
                        <Box data-tip data-for="storeVolume" mr="8px">
                          <IconBox>
                            <IconVolume />
                          </IconBox>
                        </Box>
                        <ReactTooltip id="storeVolume" effect="solid">
                          <span>店舗側音量</span>
                        </ReactTooltip>
                        <Box>
                          <Flex mb="4px">
                            <Text w="30px" fontSize="12px" mr="12px">
                              入力
                            </Text>
                            <Slider
                              aria-label="slider-ex-1"
                              defaultValue={30}
                              w={VolumeMaxWidth}
                            >
                              <SliderTrack>
                                <SliderFilledTrack
                                  {...shopPcVolumeSliderProps}
                                />
                              </SliderTrack>
                              <SliderThumb {...shopPcVolumeSliderProps} />
                            </Slider>
                          </Flex>
                          <Flex>
                            <Text w="30px" fontSize="12px" mr="12px">
                              出力
                            </Text>
                            <Slider
                              aria-label="slider-ex-1"
                              defaultValue={30}
                              w={VolumeMaxWidth}
                            >
                              <SliderTrack>
                                <SliderFilledTrack
                                  {...shopPcVolumeSliderProps}
                                />
                              </SliderTrack>
                              <SliderThumb {...shopPcVolumeSliderProps} />
                            </Slider>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex alignItems="center" ml="16px">
                        <Box data-tip data-for="storeVolume" mr="8px">
                          <IconBox>
                            <IconVideo />
                          </IconBox>
                        </Box>
                        <ReactTooltip id="storeVolume" effect="solid">
                          <span>店舗側音量</span>
                        </ReactTooltip>
                        <Select size="sm" w={selectMaxWidth}>
                          <option value="option1">Integrated</option>
                          <option value="option2">
                            Integrated Webcam_0c45:600000
                          </option>
                        </Select>
                      </Flex>
                    </Flex>
                  </Box>
                )
              })}
              <div
                style={{
                  background: '#ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '200px',
                }}
              >
                tab
              </div>
            </div>
          </div>

          <div
            style={{
              boxSizing: 'border-box',
              textAlign: 'center',
              flexGrow: '1',
              width: '45%',
            }}
          >
            <div
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              console
              <ConsoleBottom>console bottom</ConsoleBottom>
            </div>
          </div>
        </div>
      </Contents>
    </>
  )
}

export default ShopInfoDemo

const Contents = styled.div`
  position: absolute;
  left: 0;
  top: 45px;
  width: 100%;
  height: calc(100vh - 45px);
`

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

const IconBox = styled.div`
  margin: 0 0 0;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 24px;
    height: 24px;
    margin: 0 0;
  }
`
const IconBoxSmall = styled.div`
  margin: 0 0 0;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 20px;
    height: 20px;
    margin: 0 0;
  }
`

const ConsoleBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100%;
  border-top: var(--border-light);
`
