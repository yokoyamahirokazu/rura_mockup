import Header from 'components/header'
import StoreInfo from 'components/atoms/storeInfo'
import styled from 'styled-components'
import ResizePanel from 'react-resize-panel-ts'
import styles from '../style/Resize.module.css'
import ReactTooltip from 'react-tooltip'
import { ReactComponent as IconCameraParent } from 'assets/icon/camera_parent.svg'
import { ReactComponent as IconCameraOnly } from 'assets/icon/camera_only.svg'
import { ReactComponent as IconCameraAll } from 'assets/icon/camera_all.svg'
// import React, { useState, useCallback } from 'react'

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

  const parentCamera = CAMERA.filter((output) => {
    return output.id === 2
  })
  const childCamera = CAMERA.filter((output) => {
    return output.id !== 2
  })

  console.log(parentCamera)
  console.log(childCamera)

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
          <ResizePanel
            direction="e"
            handleClass={styles.customeHandle}
            borderClass={styles.customeBorder}
            style={{
              width: 'calc(100vw - 640px)',
              maxWidth: 'calc(100vw - 320px)',
              minWidth: '320px',
              position: 'relative',
            }}
          >
            <div
              style={{
                flexGrow: '2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--bg-color)',
                }}
              >
                {CAMERA.length === 1 && (
                  <>
                    {CAMERA.map((cameraOnly) => {
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
                  </>
                )}

                {parentCamera.map((camera) => {
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
                            <CameraBoxButton
                              data-tip
                              data-for="cameraOnly"
                              data-item={camera.id}
                            >
                              <IconCameraOnly />
                            </CameraBoxButton>
                            <CameraBoxButton data-tip data-for="cameraAll">
                              <IconCameraAll />
                            </CameraBoxButton>
                          </CameraBoxTool>
                        </CameraBoxToolBar>

                        <ReactTooltip id="cameraOnly" effect="solid">
                          <span>このカメラ映像だけ表示</span>
                        </ReactTooltip>
                        <ReactTooltip id="cameraAll" effect="solid">
                          <span>全カメラ表示</span>
                        </ReactTooltip>
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
                  {childCamera.map((camera) => {
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
                                >
                                  <IconCameraParent />
                                </CameraBoxButton>
                                <CameraBoxButton
                                  data-tip
                                  data-for="cameraOnly"
                                  data-item={camera.id}
                                >
                                  <IconCameraOnly />
                                </CameraBoxButton>
                              </div>
                            </div>
                          </CameraBoxToolBox>
                          <ReactTooltip id="cameraParent" effect="solid">
                            <span>親子表示のメインにする</span>
                          </ReactTooltip>
                          <ReactTooltip id="cameraOnly" effect="solid">
                            <span>このカメラ映像だけ表示</span>
                          </ReactTooltip>
                        </CameraBox>
                      </div>
                    )
                  })}
                </div>
                {/* {CAMERA.length > 1 && (
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
                                >
                                  <IconCameraParent />
                                </CameraBoxButton>
                                <CameraBoxButton
                                  data-tip
                                  data-for="cameraOnly"
                                  data-item={camera.id}
                                >
                                  <IconCameraOnly />
                                </CameraBoxButton>
                                <CameraBoxButton data-tip data-for="cameraAll">
                                  <IconCameraAll />
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
                              <span>全カメラ表示</span>
                            </ReactTooltip>
                          </CameraBox>
                        </div>
                      )
                    })}
                  </div>
                )} */}

                <StoreInfo name="倉敷駅前店" deviceType="android" />
              </div>
            </div>
          </ResizePanel>

          <div
            style={{
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>right panel</div>
          </div>
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
