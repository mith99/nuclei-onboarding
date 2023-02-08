import { render } from "@testing-library/react";
import StepOne from "./StepOne";
import TestRenderer from 'react-test-renderer'; // ES6

describe(StepOne, () =>{
    it("function validates names - pass" , ()=>{
        const wrapper =  TestRenderer.create(<StepOne/>)
        const instance = wrapper.getInstance();

        expect(instance.nameValidation('Mithma')).toMatchSnapshot();
    })

    it("function validates names - fail" , ()=>{
        const wrapper =  TestRenderer.create(<StepOne/>)
        const instance = wrapper.getInstance();

        expect(instance.nameValidation('Mithma3')).toMatchSnapshot();
    })


    it("function validates emails - pass" , ()=>{
        const wrapper =  TestRenderer.create(<StepOne/>)
        const instance = wrapper.getInstance();

        expect(instance.emailValidation('mithma.vs@gmail.com')).toMatchSnapshot();
    })

    it("function validates emails - fail" , ()=>{
        const wrapper =  TestRenderer.create(<StepOne/>)
        const instance = wrapper.getInstance();

        expect(instance.emailValidation('mithma.vs@gmail')).toMatchSnapshot();
    })
})