import Header from 'components/header'
import ConsoleLeft from 'components/atoms/consoleLeft'
import ConsoleRight from 'components/atoms/consoleRIght'
import styled from 'styled-components'
import ResizePanel from 'react-resize-panel-ts'
import styles from '../style/Resize.module.css'
import ReactTooltip from 'react-tooltip'
import { ReactComponent as IconCameraParent } from 'assets/icon/camera_parent.svg'
import { ReactComponent as IconCameraOnly } from 'assets/icon/camera_only.svg'
import { ReactComponent as IconCameraAll } from 'assets/icon/camera_all.svg'
import { ReactComponent as IconAndroid } from 'assets/icon/android.svg'
import { ReactComponent as IconDisplay } from 'assets/icon/display.svg'
import { ReactComponent as IconVolume } from 'assets/icon/volume_high.svg'
import { ReactComponent as IconSizeSmall } from 'assets/icon/camera_size_small.svg'
import { ReactComponent as IconSizeLarge } from 'assets/icon/camera_size_large.svg'
import { useState, useRef, useEffect } from 'react'
import React from 'react';

export const Service = () => {
  const CAMERA = [
    {
      id: 1,
      imgSrc: 'camera_front.png',
      name: '正面カメラ',
    },
    {
      id: 2,
      imgSrc: 'camera_left.png',
      name: '左カメラ',
    },
    {
      id: 3,
      imgSrc: 'camera_right.png',
      name: '右カメラ',
    },
    {
      id: 4,
      imgSrc: 'camera_top.png',
      name: '手元カメラ',
    },
  ]
  const STORE = [
    {
      id: 1,
      name: '倉敷駅前店',
      deviceType: 'android',
    },
  ]

  const [parent, parentDp] = useState('none')
  const [all, allDp] = useState('block')
  const [only, onlyDp] = useState('none')

  const [filter, setFilter] = useState<string | null>('1')

  // 各カメラボタン
  const handleParent = (e: React.MouseEvent<HTMLElement>) => {
    const selectId = e.currentTarget.getAttribute('data-item')
    setFilter(selectId)
    parentDp('block')
    allDp('none')
    onlyDp('none')
  }
  const handleOnly = (e: React.MouseEvent<HTMLElement>) => {
    const selectId = e.currentTarget.getAttribute('data-item')
    setFilter(selectId)
    parentDp('none')
    allDp('none')
    onlyDp('block')
  }
  const handleAll = () => {
    parentDp('none')
    allDp('block')
    onlyDp('none')
  }

  // カメラ切り替え
  const selectCmaera = CAMERA.filter((camera) => {
    if (filter === '1') return camera.id === 1
    if (filter === '2') return camera.id === 2
    if (filter === '3') return camera.id === 3
    if (filter === '4') return camera.id === 4
    else return camera.id === 1
  })

  const otherCmaera = CAMERA.filter((camera) => {
    if (filter === '1') return camera.id !== 1
    if (filter === '2') return camera.id !== 2
    if (filter === '3') return camera.id !== 3
    if (filter === '4') return camera.id !== 4
    else return camera.id !== 1
  })




  // 左コンポーネント幅取得
  const leftRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const leftWidth = entries[0].contentRect.width
      const leftHeight = entries[0].contentRect.height
      console.log('leftWidth:' + leftWidth)
      console.log('leftHeight:' + leftHeight)
    })
    leftRef.current && observer.observe(leftRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  const [flex, setFlex] = useState<string>('flex')
  const [consoleWidth, setConsoleWidth] = useState<string>('50%')
  const [consoleLeftPadding, setConsoleLeftPadding] =
    useState<string>('16px 8px 16px 16px')
  const [consoleRightPadding, setConsoleRightPadding] =
    useState<string>('16px 16px 16px 8px')
  const [consoleRightBgColor, setConsoleRightBgColor] = useState<string>('#fff')

  const [consoleRightHeight, setConsoleRightHeight] = useState<string>('100%')

  // 右コンポーネント幅取得
  const rightRef = useRef<HTMLDivElement>(null)
  const consoleLeftRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const rightWidth = entries[0].contentRect.width
      const rightHeight = entries[0].contentRect.height
      const consoleLeftHeight = entries[1].contentRect.height

      console.log('consoleLeftHeight:' + consoleLeftHeight)
      const consoleRightHeightNumber =
        'calc(100% - ' + consoleLeftHeight + 'px - 32px)'
      console.log('consoleRightHeightNumber' + consoleRightHeightNumber)

      console.log('rightWidth:' + rightWidth)
      console.log('rightHeight:' + rightHeight)
      if (rightWidth < 480) setFlex('block')
      else setFlex('flex')
      if (rightWidth < 480) setConsoleWidth('100%')
      else setConsoleWidth('50%')
      if (rightWidth < 480) setConsoleLeftPadding('16px 16px 0')
      else setConsoleLeftPadding('16px 8px 16px 16px')
      if (rightWidth < 480) setConsoleRightPadding('16px')
      else setConsoleRightPadding('16px 16px 16px 8px')
      if (rightWidth < 480) setConsoleRightBgColor('#f7f7f7')
      else setConsoleRightBgColor('#fff')
      if (rightWidth < 480) setConsoleRightHeight(consoleRightHeightNumber)
      else setConsoleRightHeight('100%')
    })
    rightRef.current && observer.observe(rightRef.current)
    consoleLeftRef.current && observer.observe(consoleLeftRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])



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
              {CAMERA.length === 1 && (
                <div style={{maxWidth:'calc( (100vh - 295px) / 0.5625)',minWidth:'360px',margin:'0 a48o'}}>
                  {CAMERA &&
                    CAMERA.map((cameraOnly) => {
                      return (
                        <CameraBox key={cameraOnly.id}>
                          {cameraOnly.imgSrc && (
                            <img
                              src={`${process.env.PUBLIC_URL}/${cameraOnly.imgSrc}`}
                            />
                          )}
                          <CameraBoxToolBar>
                            <CameraBoxName>{cameraOnly.name}</CameraBoxName>
                          </CameraBoxToolBar>
                        </CameraBox>
                      )
                    })}
                </div>
              )}
              <div>
                {CAMERA.length > 1 && (
                  <>
                    {parent === 'none' && all === 'block' && only === 'none' && (
                      <div
                        style={{
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          width: '100%',
                          maxWidth:'calc( (100vh - 295px) / 0.5625)',
                          minWidth:'480px',
                          padding: '4px',
                          boxSizing: 'border-box',
                          flexWrap: 'wrap',
                          display: 'flex',
                          margin:'0 auto',
                        }}
                      >
                        {CAMERA.map((camera) => {
                          return (
                            <div
                              key={camera.id}
                              style={{
                                width: 'calc(50% - 8px)',
                                margin: '4px',
                                borderRadius: '4px',
                                overflow: 'hidden',
                              }}
                            >
                              <CameraBox>
                                {camera.imgSrc && (
                                  <img
                                    src={`${process.env.PUBLIC_URL}/${camera.imgSrc}`}
                                  />
                                )}
                                <CameraBoxToolBar>
                                  <CameraBoxName>{camera.name}</CameraBoxName>
                                  <CameraBoxTool>
                                    <CameraBoxButton
                                      data-tip
                                      data-for="cameraParent"
                                      data-item={camera.id}
                                      onClick={handleParent}
                                    >
                                      <IconCameraParent />
                                    </CameraBoxButton>
                                    <CameraBoxButton
                                      data-tip
                                      data-for="cameraOnly"
                                      data-item={camera.id}
                                      onClick={handleOnly}
                                    >
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
                                <ReactTooltip id="cameraAll" effect="solid">
                                  <span>全てのカメラを均等に表示</span>
                                </ReactTooltip>
                              </CameraBox>
                            </div>
                          )
                        })}
                      </div>
                    )}
                    {parent === 'block' && all === 'none' && only === 'none' && (
                      <div style={{maxWidth:'calc( (100vh - 295px) / 0.76)',                          minWidth:'480px',margin:'0 auto'}}>
                        {selectCmaera &&
                          selectCmaera.map((camera: any) => {
                            return (
                              <div
                                key={camera.id}
                                style={{
                                  width: 'calc(100% - 16px)',
                                  margin: '8px 8px 0',
                                  borderRadius: '4px',
                                  overflow: 'hidden',
                                }}
                              >
                                <CameraBox>
                                  {camera.imgSrc && (
                                    <img
                                      src={`${process.env.PUBLIC_URL}/${camera.imgSrc}`}
                                    />
                                  )}
                                  <CameraBoxToolBar>
                                    <CameraBoxName>{camera.name}</CameraBoxName>
                                    <CameraBoxTool>
                                      <>
                                        <CameraBoxButton
                                          data-tip
                                          data-for="cameraOnly"
                                          data-item={camera.id}
                                          onClick={handleOnly}
                                        >
                                          <IconCameraOnly />
                                        </CameraBoxButton>
                                        <ReactTooltip
                                          id="cameraOnly"
                                          effect="solid"
                                        >
                                          <span>このカメラ映像だけ表示</span>
                                        </ReactTooltip>
                                      </>

                                      <CameraBoxButton
                                        data-tip
                                        data-for="cameraAll"
                                        onClick={() => {
                                          parentDp('none')
                                          allDp('block')
                                          onlyDp('none')
                                        }}
                                      >
                                        <IconCameraAll />
                                      </CameraBoxButton>
                                      <ReactTooltip
                                        id="cameraOnly"
                                        effect="solid"
                                      >
                                        <span>このカメラ映像だけ表示</span>
                                      </ReactTooltip>
                                      <ReactTooltip
                                        id="cameraAll"
                                        effect="solid"
                                      >
                                        <span>全てのカメラを均等に表示</span>
                                      </ReactTooltip>
                                    </CameraBoxTool>
                                  </CameraBoxToolBar>
                                </CameraBox>
                              </div>
                            )
                          })}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            width: '100%',
                            padding: '4px',
                            boxSizing: 'border-box',
                            flexWrap: 'wrap',
                          }}
                        >
                          {otherCmaera &&
                            otherCmaera.map((camera) => {
                              return (
                                <div
                                  key={camera.id}
                                  style={{
                                    width: 'calc(33.33333% - 8px)',
                                    margin: '4px',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                  }}
                                >
                                  <CameraBox>
                                    {camera.imgSrc && (
                                      <img
                                        src={`${process.env.PUBLIC_URL}/${camera.imgSrc}`}
                                      />
                                    )}
                                    <CameraBoxToolBox>
                                      <div
                                        style={{
                                          textAlign: 'center',
                                        }}
                                      >
                                        <CameraBoxToolBoxName>
                                          {camera.name}
                                        </CameraBoxToolBoxName>
                                        <div
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            margin: '8px auto 0',
                                          }}
                                        >
                                          <CameraBoxButton
                                            data-tip
                                            data-for="cameraParent"
                                            data-item={camera.id}
                                            onClick={handleParent}
                                          >
                                            <IconCameraParent />
                                          </CameraBoxButton>
                                          <CameraBoxButton
                                            data-tip
                                            data-for="cameraOnly"
                                            data-item={camera.id}
                                            onClick={handleOnly}
                                          >
                                            <IconCameraOnly />
                                          </CameraBoxButton>
                                        </div>
                                      </div>
                                    </CameraBoxToolBox>
                                    <ReactTooltip
                                      id="cameraParent"
                                      effect="solid"
                                    >
                                      <span>親子表示のメインにする</span>
                                    </ReactTooltip>
                                    <ReactTooltip
                                      id="cameraOnly"
                                      effect="solid"
                                    >
                                      <span>このカメラ映像だけ表示</span>
                                    </ReactTooltip>
                                  </CameraBox>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                    )}
                    {parent === 'none' && all === 'none' && only === 'block' && (
                      <>
                        {selectCmaera &&
                          selectCmaera.map((camera) => {
                            return (
                              <div
                                key={camera.id}
                                style={{
                                  width: '100%',
                                  maxWidth:'calc( (100vh - 295px) / 0.5625)',
                                                            minWidth:'480px',
                                  margin: '0 auto',
                                  borderRadius: '0',
                                  overflow: 'hidden',
                                }}
                              >
                                <CameraBox>
                                  {camera.imgSrc && (
                                    <img
                                      src={`${process.env.PUBLIC_URL}/${camera.imgSrc}`}
                                    />
                                  )}
                                  <CameraBoxToolBar>
                                    <CameraBoxName>{camera.name}</CameraBoxName>
                                    <CameraBoxTool>
                                      {only === 'block' && (
                                        <>
                                          <CameraBoxButton
                                            data-tip
                                            data-for="cameraParent"
                                            data-item={camera.id}
                                            onClick={handleParent}
                                          >
                                            <IconCameraParent />
                                          </CameraBoxButton>
                                          <ReactTooltip
                                            id="cameraParent"
                                            effect="solid"
                                          >
                                            <span>親子表示のメインにする</span>
                                          </ReactTooltip>
                                        </>
                                      )}
                                      <>
                                        <CameraBoxButton
                                          data-tip
                                          data-for="cameraAll"
                                          onClick={handleAll}
                                        >
                                          <IconCameraAll />
                                        </CameraBoxButton>
                                        <ReactTooltip
                                          id="cameraAll"
                                          effect="solid"
                                        >
                                          <span>全てのカメラを均等に表示</span>
                                        </ReactTooltip>
                                      </>
                                    </CameraBoxTool>
                                  </CameraBoxToolBar>
                                </CameraBox>
                              </div>
                            )
                          })}
                      </>
                    )}
                  </>
                )}
              </div>
              {STORE.map((store) => {
                return (
                  <StoreInfoBox key={store.id}>
                    <StoreName>{store.name}</StoreName>
                    <ToolBar>
                      {store.deviceType === 'android' && (
                        <DeviceType>
                          <IconAndroid />
                          android
                        </DeviceType>
                      )}
                      {store.deviceType === 'pc' && (
                        <DeviceType>
                          <IconDisplay />
                          PC
                        </DeviceType>
                      )}
                      <>
                        <VolumeButton data-tip data-for="storeVolume">
                          <IconVolume />
                        </VolumeButton>
                        <ReactTooltip id="storeVolume" effect="solid">
                          <span>店舗側音量</span>
                        </ReactTooltip>
                      </>
                      <>
                        <CameraSizeButton data-tip data-for="cameraSmall">
                          <IconSizeSmall />
                        </CameraSizeButton>
                        <ReactTooltip id="cameraSmall" effect="solid">
                          <span>最小化</span>
                        </ReactTooltip>
                      </>
                      <>
                        <CameraSizeButton data-tip data-for="cameraLarge">
                          <IconSizeLarge />
                        </CameraSizeButton>
                        <ReactTooltip id="cameraLarge" effect="solid">
                          <span>最大化</span>
                        </ReactTooltip>
                      </>
                      {parent === 'block' && (
                        <>
                          <CameraSizeButton
                            data-tip
                            data-for="cameraAll"
                            onClick={handleAll}
                          >
                            <IconCameraAll />
                          </CameraSizeButton>
                          <ReactTooltip id="cameraAll" effect="solid">
                            <span>全てのカメラを均等に表示</span>
                          </ReactTooltip>
                        </>
                      )}
                      {only === 'block' && (
                        <>
                          <CameraSizeButton
                            data-tip
                            data-for="cameraAll"
                            onClick={() => {
                              parentDp('none')
                              onlyDp('none')
                              allDp('block')
                            }}
                          >
                            <IconCameraAll />
                          </CameraSizeButton>
                          <ReactTooltip id="cameraAll" effect="solid">
                            <span>全てのカメラを均等に表示</span>
                          </ReactTooltip>
                        </>
                      )}
                    </ToolBar>
                  </StoreInfoBox>
                )
              })}
            <div style={{background:'#ddd',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'200px'}}>
              tab
            </div>

            </div>

          </div>
          <ResizePanel
            direction="w"
            style={{ width: '720px', minWidth: '320px', maxWidth: '720px' }}
            borderClass={styles.customResizeBorder}
            handleClass={styles.customHandle}
          >
            <div
              style={{
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                flexGrow: '1',
              }}
            >
              <div
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <div
                  style={{
                    display: `${flex}`,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '0',
                    height: 'calc( 100% - 80px)',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  ref={rightRef}
                >
                  <div
                    style={{
                      width: `${consoleWidth}`,
                      padding: `${consoleLeftPadding}`,
                      margin: '0 0 0 0',
                      boxSizing: 'border-box',
                    }}
                    ref={consoleLeftRef}
                  >
                    <ConsoleLeft />
                  </div>
                  <div
                    style={{
                      width: `${consoleWidth}`,
                      padding: `${consoleRightPadding}`,
                      backgroundColor: `${consoleRightBgColor}`,
                      height: `${consoleRightHeight}`,
                      margin: '0 0 0 0',
                      boxSizing: 'border-box',
                    }}
                  >
                    <ConsoleRight />
                  </div>
                </div>
                <ConsoleBottom>console bottom</ConsoleBottom>
              </div>
            </div>
          </ResizePanel>
        </div>
      </Contents>
    </>
  )
}

export default Service

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
const CameraBoxToolBox = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.2s;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const CameraBoxToolBoxName = styled.span`
  font-size: 12px;
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
  margin: 0 0 0 4px;
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

const ConsoleBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100%;
  border-top: var(--border-light);
`
