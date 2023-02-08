import React, { useContext, useMemo, useState } from 'react'
import '../StepOne/StepOne.scss'
import '../background.scss'
import '../InfoBar/InfoBar.scss'
import ReactFlagsSelect from "react-flags-select";
import countryList from 'react-select-country-list'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import InfoBar from '../InfoBar/InfoBar'
import NavBar from '../NavBar/NavBar';
import './slider.less';
import "rsuite/dist/rsuite.min.css";

import Slider from 'rsuite/Slider';
import RangeSlider from 'rsuite/RangeSlider';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Context from '../../ContextAPI/Context';




const StepTwo = () => {

  const conText = useContext(Context)

  const [selected, setSelected] = useState("AF");
  const [value, setValue] = useState([10000, 200000])
  const options = useMemo(() => countryList().getData(), [])
  const [fromFocus, setFromFocus] = useState()
  const [toFocus, setToFocus] = useState()
  const [isAccredited, setIsAccredited] = useState(conText.isAccredited);


  const changeHandler = (val) => {
    conText.setInvRange(val)

    console.log(conText.invRange)

  }

  const handleMinRange = (e) => {

    let nextValue = parseInt(e.target.value);
    const [start, end] = value;
    if (nextValue > end) {
      console.log(nextValue)
      return;
    }

    if (nextValue < 10000) {
      return;

    }

    setValue([nextValue, value[1]])

  }

  const handleMaxRange = (e) => {

    let nextValue = parseInt(e.target.value);
    let x = e.target.value.trim()

    console.log(x.length)

    if (x.length === 0) {
      return
    }
    else {
      const [start, end] = value;
      if (start > nextValue) {
        console.log(nextValue)
        return;
      }

      if (nextValue > 1000000) {
        return;

      }

      if (nextValue === ' ') {
      }

      console.log(e.target.value)
      console.log(isNaN(e.target.value))

      setValue([value[0], parseInt(e.target.value)])
    }






  }

  const setGender = (e) => {
    if (e.target.value === 'Yes') {
      setIsAccredited('Yes')
      conText.setIsAccredited('Yes')
    }
    else if (e.target.value === 'No') {
      setIsAccredited('No')
      conText.setIsAccredited('No')

    }
  }

  return (
    <Context.Consumer>
      {(context) => (
        <div className='center-container'>
          <div className='modal-container'>
            <div className='sidebar-container'>
              <LeftSideBar
                testamony="Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free"
                user='Jodie Sears'
                designation='UNITEDPROPERTIES’ AGENT' />


            </div>
            <div className='right-sidebar'>
              <InfoBar
                step='2'
                stepName='Investment plans'
                stepDescription='Let us know about your investment plans. This will help us get you to the right expert who will help you further' />

              <div className='form-container'>

                <div className='step-name' style={{ fontSize: '21px' }}>
                  How much are you planning to invest in this year?
                </div>

                <div>

                  <div className='fullname' style={{ marginTop: '20px' }}>
                    <div style={{ width: '48%' }} className={fromFocus ? 'input-container-focused' : 'input-container'}>
                      <div className={fromFocus ? 'form-labels-focused' : 'form-labels'}>
                        From
                      </div>
                      <div className='inputs' style={{ display: 'flex' }}>
                        $<input
                          value={context.invRange[0]}
                          style={{ width: '100%' }}
                          className='inputs'
                          // onChange={(e) => {
                          //   handleMinRange(e)
                          // }}
                          onChange={(e) => { handleMinRange(e) }}
                          onFocus={() => { setFromFocus(true) }}
                          onBlur={() => { setFromFocus(false) }} />

                      </div>
                    </div>


                    <div style={{ width: '48%' }} className={toFocus ? 'input-container-focused' : 'input-container'}>
                      <div className={toFocus ? 'form-labels-focused' : 'form-labels'}>
                        To
                      </div>
                      <div className='inputs' style={{ display: 'flex' }}>
                        $<input
                          value={context.invRange[1]}
                          style={{ width: '100%' }}
                          className='inputs'
                          onChange={(e) => { handleMaxRange(e) }}

                          onFocus={() => { setToFocus(true) }}
                          onBlur={() => { setToFocus(false) }} />

                      </div>
                    </div>

                  </div>
                </div>

                <div className='slider-container'>
                  <RangeSlider value={[context.invRange[0], context.invRange[1]]}
                    min={10000}
                    step={10000}
                    max={1000000}
                    graduated
                    progress
                    renderMark={mark => {
                      if ([10000, 50000, 100000, 200000, 500000, 1000000].includes(mark)) {
                        return <span>${mark}</span>;
                      }
                      return null;
                    }}

                    onChange={value => {
                      changeHandler(value);

                    }}
                  />
                </div>


                <div className='step-name' style={{ fontSize: '21px', marginTop: '80px' }}>
                  Are you an accredited investor?
                </div>

                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={context.isAccredited}
                    name="radio-buttons-group"
                    onChange={(e) => { setGender(e) }}

                  >
                    <div style={{ display: 'flex', marginTop: '10px' }} >
                      <div className={isAccredited=== 'Yes'? 'radio-btn-container  radio-btn-container-selected' : 'radio-btn-container'}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />

                      </div>

                      <div className={isAccredited === 'No' || !isAccredited === true ? 'radio-btn-container radio-btn-container-selected  ' : 'radio-btn-container '}>
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                      </div>
                    </div>


                  </RadioGroup>
                </FormControl>

              </div>



              <NavBar />

            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  )
}

export default StepTwo