import React from 'react'
import './LeftSideBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import comma from '../../Assets/comma.png'
import Context from '../../ContextAPI/Context';




const LeftSideBar = (props) => {
  return (
    <Context.Consumer>
    {(context) => (
    <div className='sidebar'>

      <div className='title-container'>
        <div className='title title-color-1'>UNITED</div>
        <div className='title title-color-2'>PROPERTIES</div>

      </div>

      <div>
        <div className='stepper-container' style={{ paddingTop: '40%' }}>
          <div className='icon-outer'>

            <div className='icon-inner '>
            </div>
          </div>
          <div className='stepper-title'>
            Contact details
          </div>

        </div>
        <div className='divider'>
          <div>
            <div className='divider-line' />
            <div className='divider-line' />
          </div>

        </div>

        <div />

      </div>

      <div>
        <div className='stepper-container'>
          <div className={context.currentStep === 1 ? 'icon-outer title-color-2 ' : 'icon-outer'}>

            {context.currentStep === 1 ? '' : <div
              className='icon-inner '>
            </div>
            }

          </div>
          <div className={context.currentStep === 1  ?'stepper-title title-color-2':'stepper-title'}>
            Investment plans
          </div>

        </div>
        <div className='divider'>
          <div>
            <div className={context.currentStep === 1 ?'divider-line title-color-2':'divider-line'} />
            <div className={context.currentStep === 1 ?'divider-line title-color-2':'divider-line'} />
          </div>

        </div>

        <div />

      </div>


      <div>
        <div className='stepper-container'>
          <div className={context.currentStep === 1 || context.currentStep === 2 ? 'icon-outer title-color-2 ' : 'icon-outer'}>

            {context.currentStep === 1 || context.currentStep === 2 ? '' : <div
              className='icon-inner '>
            </div>
            }

          </div>
          <div className={context.currentStep === 1 || context.currentStep === 2 ?'stepper-title title-color-2':'stepper-title'}>
            Investment preferences

          </div>

        </div>


      </div>





      <div className='testamony-container'>
        <div class="testamony-card overlay">
          <div className='testamony'>
            {props.testamony}
          </div>

          <div className='name'>
            {props.user}
          </div>

          <div className='end-box'>
            <div className='designation'>
              {props.designation}
            </div>
            <div className='logo'>
              <div className='letter-u'>U</div>
              <div className='letter-p'>P</div>
            </div>
          </div>

        </div>
        <div class="box center-content">
          <img src={comma} />
        </div>

      </div>

    </div>
     )}
     </Context.Consumer>
  )
}

export default LeftSideBar