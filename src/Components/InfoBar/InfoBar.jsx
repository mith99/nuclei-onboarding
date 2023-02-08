import React from 'react'
import './InfoBar.scss'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const InfoBar = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <div className='bar-top'>
        <div className='top-left'> STEP {props.step} OF 3</div>
        <div style={{ display: 'flex' }}>

          <div className='top-right'>Lost or have trouble?</div>
          <div className='top-right top-right-blue'>
            Get help
            <ArrowRightAltIcon />

          </div>

        </div>
      </div>
      <div className='bar-bottom'>
        <div className='step-name'>{props.stepName}</div>
        <div className='step-desc top-right'>{props.stepDescription}</div>
      </div>

      
    </div>
  )
}

export default InfoBar