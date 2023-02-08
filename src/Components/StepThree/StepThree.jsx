import React, { useMemo, useState } from 'react'
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
import "rsuite/dist/rsuite.min.css";

import Slider from 'rsuite/Slider';
import RangeSlider from 'rsuite/RangeSlider';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '../Checkbox/Checkbox';


const StepThree = () => {

    const [value, setValue] = useState('')


    const changeHandler = (e) => {
        setValue(e)

        console.log(value)
    }

    return (
        <div className='center-container'>
            <div className='modal-container'>
                <div className='sidebar-container'>
                <LeftSideBar step='3'
                testamony="United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side"
                user='Ollie Mcmahon'
                designation='MANAGING DIRECTOR'/>

                </div>
                <div className='right-sidebar'>
                    <InfoBar
                        
                        stepName='Investment preferences'
                        stepDescription='This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals' />

                    <div className='form-container'>

                        <div className='step-name' style={{ fontSize: '21px' }}>
                            What kind of real estate are you interested in?
                        </div>

                        <div className='checkboxes-container'style={{width:'70%',marginTop:'20px'}}>

                        <Checkbox text='Single family'/>
                        <Checkbox text="Residential multifamily"/>
                        <Checkbox text="Commercial retail"/>
                        <Checkbox text="Commercial industrial"/>



                        </div>

                        <div className='checkboxes-container'style={{width:'70%', marginTop:'20px'}}>

                        <Checkbox text="Commercial hospitality"/>
                        <Checkbox text="Commercial warehousing"/>
                        <Checkbox text="Commercial office"/>
                        <Checkbox text="Other"/>



                        </div>
                    </div>

                    <NavBar />

                </div>
            </div>
        </div>
    )
}

export default StepThree