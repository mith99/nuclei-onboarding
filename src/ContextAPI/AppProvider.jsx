import Context from "./Context";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



const AppProvider = (props) => {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep]= useState(1)
    const [name, setName]= useState('')
    const [email, setEmail] = useState()
    const [phnNo, setPhnNo] = useState()
    const [country, setCountry] = useState()
    const [invRange, setInvRange] = useState([10000, 200000])
    const [isAccredited, setIsAccredited] = useState('Yes')
    const [interests, setInterests]=useState([])


    const submit = () =>{
        //get all states saved.


        
        alert("Submitted Succesfully")
    }

    const errAlert = () =>{
        alert("Please fill fields correctly")
    }


    const navigationForward = () =>{
        if(currentStep==1){
            setCurrentStep(currentStep+1)
            navigate('/step2')
            

        }
        else if(currentStep==2){
            setCurrentStep(currentStep+1)

            navigate('/step3')

        }

    }

    const navigationBack= () =>{
        if(currentStep==2){
            setCurrentStep(currentStep-1)

            navigate('/')

        }
        else if(currentStep==3){
            setCurrentStep(currentStep-1)
            navigate('/step2')

        }

    }


    return (

       
        <Context.Provider
        value={{
            navigationForward,
            navigationBack,
            currentStep,
            setCurrentStep,
            name,
            setName,
            email,
            setEmail,
            phnNo,
            setPhnNo,
            country,
            setCountry,
            invRange,
            setInvRange,
            isAccredited,
            setIsAccredited,
            interests,
            setInterests,
            submit,
            errAlert
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default AppProvider;
