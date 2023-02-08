import React from 'react'
import Button from '@mui/material/Button';
import './NavBar.scss';
import '../InfoBar/InfoBar.scss'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { fontSize, fontWeight } from '@mui/system';
import "@fontsource/montserrat";
import '../StepOne/StepOne.scss'
import Context from '../../ContextAPI/Context';



const NavBar = (props) => {
    return (
        <Context.Consumer>
            {(context) => (
                <div className='nav-container'>

                    {context.currentStep === 1 ?
                        <div
                            className='top-right top-right-blue'
                            onClick={() => { context.navigationBack() }}
                        >

                            <ArrowRightAltIcon className='arr' />
                            Back to the home page
                        </div>
                        : <div
                            className='top-right top-right-blue'
                            onClick={() => { context.navigationBack() }}
                        >

                            <ArrowRightAltIcon className='arr' />
                            Back to the previous step
                        </div>
                    }


                    <div className='nav-right'>

                        <Button
                            variant="contained"
                            disableElevation
                            sx={{
                                // width:'150px',
                                // height:'50px',
                                color: '#35A0EE',
                                background: 'rgba(53, 160, 238, 0.1)',
                                fontWeight: '600',
                                fontSize: '16px',
                                fontFamily: 'Montserrat',
                                textTransform: 'none '

                            }} >
                            Skip for now
                        </Button>
                        {context.currentStep === 3 ?
                            <Button variant="contained"
                                disableElevation
                                sx={{
                                    // width:'150px',
                                    // height:'50px',
                                    color: '#ffffff',
                                    background: '#35A0EE',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    fontSize: '16px',
                                    fontFamily: 'Montserrat',
                                    textTransform: 'none ',
                                    width: '100px',
                                    marginLeft: '20px'


                                }}
                                onClick={() => { context.submit() }}
                            >

                                Finish
                            </Button>
                            :
                            <Button variant="contained"
                                disableElevation
                                sx={{
                                    // width:'150px',
                                    // height:'50px',
                                    color: '#ffffff',
                                    background: '#35A0EE',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    fontSize: '16px',
                                    fontFamily: 'Montserrat',
                                    textTransform: 'none ',
                                    marginLeft: '20px'


                                }}
                                onClick={() => { props.err ? context.errAlert() : context.navigationForward() }}
                            >

                                Next Step <ArrowRightAltIcon />
                            </Button>
                        }



                    </div>

                </div>
            )}
        </Context.Consumer>
    )
}

export default NavBar