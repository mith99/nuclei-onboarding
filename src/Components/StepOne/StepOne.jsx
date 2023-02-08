import React, { useContext, useMemo, useState } from 'react'
import './StepOne.scss'
import '../background.scss'
import '../InfoBar/InfoBar.scss'
import ReactFlagsSelect from "react-flags-select";
import countryList from 'react-select-country-list'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Context from '../../ContextAPI/Context';



import LeftSideBar from '../LeftSideBar/LeftSideBar'
import InfoBar from '../InfoBar/InfoBar'
import NavBar from '../NavBar/NavBar';
import { color } from '@mui/system';

const StepOne = () => {

  const conText = useContext(Context)


  const [selected, setSelected] = useState("AF");
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const [nameFocus, setNameFocus] = useState('')
  const [phnNoFocus, setPhnNoFocus] = useState('')
  const [emailFocus, setEmailFocus] = useState('')
  const [countryFocus, setCountryFocus] = useState('')

  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')




  const changeHandler = (e) => {
    conText.setCountry(e)

  }


  const nameValidation = (e) => {
    const namePattern = /^(?!\s+$)[a-zA-Z,'. -]+$/
      conText.setName(e);


    if (namePattern.test(e)) {
      setNameErr(false)
      conText.setName(e);
      return true
    }
    else{
      setNameErr(true)
      return false
    }


  

  }


  const emailValidation = (e) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    let m = e.target.value.replace(/\s/g, "")
    conText.setEmail(m)


    
    if (emailPattern.test(e.target.value)) {
      conText.setEmail(m)

      console.log(conText.email, conText.name)

      setEmailErr(false)

      return true;
    }
    else {
      setEmailErr(true)
      return false;
    }

  }



  return (
    <Context.Consumer>
      {(context) => (
        <div className='center-container'>
          <div className='modal-container'>
            <div className='sidebar-container'>
              <LeftSideBar
                testamony="We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"
                user='William Mac'
                designation='CO-FOUNDER, INVESTOR'
              />


            </div>
            <div className='right-sidebar'>
              <InfoBar
                step='1'
                stepName='Сontact details'
                stepDescription='Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you' />

              <div className='form-container'>
                <div>
                  <div className={nameFocus ? 'form-labels-focused' : 'form-labels'}>
                    Full name
                  </div>
                  <div className='fullname'>
                    <div style={{ width: '48%' }} className={nameFocus ? 'input-container-focused' : 'input-container'}>
                      <input style={{ width: '100%' }}
                        defaultValue={context.name}
                        className='inputs'
                        onFocus={() => { setNameFocus(true) }}
                        onBlur={(e) => {
                          setNameFocus(false)
                        }}

                        onChange={(e)=>{
                          nameValidation(e.target.value)

                        }}

                      />
                    </div>

                    <div style={{ width: '48%', display: 'flex' }} className={phnNoFocus ? 'input-container-focused' : 'input-container'}>

                      {/* <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    showSelectedLabel={false}

                  />
                  <input style={{ width: '100%' }} className='inputs' /> */}

                      <PhoneInput
                        value={context.phnNo}
                        country={"ie"}
                        specialLabel={false}
                        inputClass={'phone-input '}
                        onFocus={() => { setPhnNoFocus(true) }}
                        onBlur={(e) => {
                          setPhnNoFocus(false)
                        }}
                        onChange={
                          phone => {
                            context.setPhnNo(phone)

                          }
                        }


                      />

                    </div>

                  </div>
                </div>
                <div style={{color:'red'}}>{nameErr?'Please enter valid name':''}</div>


                <div style={{ marginTop: '30px' }}>
                  <div className={emailFocus ? 'form-labels-focused' : 'form-labels'}>
                    E-mail address
                  </div>
                  <div className='fullname'>
                    <div style={{ width: '100%' }} className={emailFocus ? 'input-container-focused' : 'input-container'}>
                      <input style={{ width: '100%' }}
                        value={context.email}
                        className='inputs'
                        onFocus={() => { setEmailFocus(true) }}
                        onBlur={() => {
                          setEmailFocus(false)
                        }}
                        onChange={(e) => [
                          emailValidation(e)

                        ]}
                        type='email'

                      />
                    </div>


                  </div>
                  <div style={{color:'red'}}>{emailErr?'Please enter valid email':''}</div>

                </div>

                <div style={{ marginTop: '30px' }}>
                  <div className={countryFocus ? 'form-labels-focused' : 'form-labels'}>
                    Country
                  </div>
                  <div className='fullname'>
                    <div style={{ width: '100%' }} className={countryFocus ? 'input-container-focused' : 'input-container'}
                    >
                      <select
                        value={context.country}
                        onChange={(e) => changeHandler(e.target.value)}
                        className='inputs country-select'
                        onFocus={() => { setCountryFocus(true) }}
                        onBlur={() => { setCountryFocus(false) }}
                      >
                        {options.map((option) => (
                          <option value={option.label}>{option.label}</option>
                        ))}

                      </select>


                    </div>


                  </div>
                </div>


              </div>
              <div style={{ marginTop: '10px' }}>

                <div style={{ width: '100%' }} >

                  <div className='bar-bottom' style={{ marginTop: '35px' }}>
                    <div className='step-name' style={{ fontSize: '21px' }}>Privacy policy</div>
                    <div className='step-desc top-right'>We know you care about how your personal information is used and shared, so we take your privacy seriously</div>
                  </div>

                  <div className='top-right top-right-blue' style={{ marginTop: '10px' }}>
                    Expand privacy policy
                    <ArrowRightAltIcon />

                  </div>
                </div>

              </div>


              <NavBar
                nextstep={2}
                err = { nameErr || emailErr ? true: false}

              />

            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  )
}

export default StepOne