import React, { useContext, useState } from 'react'
import './Checkbox.scss'
import '../StepOne/StepOne.scss'
import Context from '../../ContextAPI/Context';


const Checkbox = (props) => {
    const conText = useContext(Context)


    const [isChecked, setIsChecked] = useState(false)


    const checkOnChange = () => {

        let x = conText.interests

        let y = [props.text];


        if (!isChecked) {

            x = x.concat(y)

            conText.setInterests(x)

            console.log(conText.interests)


        }
        else {

            if(x.includes(props.text)){
                var filteredArray = x.filter(function(e) { return e !== props.text })
                conText.setInterests(filteredArray)
                console.log(conText.interests)

            }

        }

        setIsChecked(!isChecked)

    }




    return (
        <Context.Consumer>
            {(context) => (
                <div className={isChecked ? 'checkbox-container checkbox-container-checked ' : 'checkbox-container'}>
                    <div style={{ padding: '15px' }}>
                        <input type={'checkbox'}
                         className='checkbox' 
                        onClick={() => {
                            checkOnChange()
                        }}

                        checked = {context.interests.includes(props.text)? true:false}


                        />
                    </div>
                    <div className='check-txt '>
                        <div style={{ width: '80%' }} className='center-container'>
                            {props.text}
                        </div>
                    </div>
                </div>
            )}
        </Context.Consumer>
    )
}

export default Checkbox