import styled from 'styled-components'
import React from 'react'
import { ReactComponent as IconDisplay } from 'assets/icon/display.svg'
import { ReactComponent as IconSpeach } from 'assets/icon/comment.svg'
import { ReactComponent as IconMotion } from 'assets/icon/simle.svg'
import { ReactComponent as IconMike } from 'assets/icon/mike_on.svg'
import LinearProgress from '@material-ui/core/LinearProgress'
import Slider from '@material-ui/core/Slider'

const ConsoleLeft: React.FC = () => {
  return (
    <>
      <ConsoleBox>
        <ConsoleTitle>
          <IconDisplay />
          表示中の状態
        </ConsoleTitle>
        <DsiplayStatus>
          <img
            src={`${process.env.PUBLIC_URL}/display_status.png`}
            alt="表示中の状態"
          />
        </DsiplayStatus>
      </ConsoleBox>
      <ConsoleBox>
        <ConsoleTitle>
          <IconSpeach />
          再生中のスピーチ
        </ConsoleTitle>
        <LinearProgress
          variant="determinate"
          value={60}
          valueBuffer={100}
          style={{
            height: '8px',
            borderRadius: '4px',
            margin: '0',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '12px',
            position: 'relative',
            margin: '4px 0 0 0',
          }}
        >
          <p style={{ left: '0', top: '0', position: 'absolute', margin: '0' }}>
            0:00
          </p>
          <p
            style={{ right: '0', top: '0', position: 'absolute', margin: '0' }}
          >
            0:00
          </p>
        </div>
      </ConsoleBox>
      <ConsoleBox>
        <ConsoleTitle>
          <IconMotion />
          再生中のモーション
        </ConsoleTitle>
      </ConsoleBox>
      <ConsoleBox>
        <ConsoleTitle>
          <IconMike />
          スタッフマイク
        </ConsoleTitle>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </ConsoleBox>
    </>
  )
}

export default ConsoleLeft

const ConsoleBox = styled.div`
  width: 100%;
  position: relative;
  margin: 0 0 16px 0;
`
const ConsoleTitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  padding: 0;
  margin: 0 0 8px 0;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & svg {
    width: 18px;
    height: 18px;
    margin: 0 3px 0 0;
  }
`

const DsiplayStatus = styled.div`
  width: 100%;
  position: relative;
  border: var(--border-light);
  box-sizing: border-box;
  &::before {
    display: block;
    content: ' ';
    padding: 56.25% 0 0 0;
  }
  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  & video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
