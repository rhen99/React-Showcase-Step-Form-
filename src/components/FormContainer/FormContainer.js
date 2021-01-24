import StepForm from "../StepForm/StepForm";
import './Form.scss';

import { useState } from "react";

function FormContainer() {
     const [step, setStep] = useState(1);

     
    return (
        <div className="form">
            <form action="#">
                <StepForm step={step}/>
                <div className="form-controls">
                    {step === 1 ? ( <button type="button" className="btn-back">Go Back</button> ) : (<button type="button" onClick={() => setStep(step - 1)} className="btn-back">Go Back</button>)}
                    
                    {step < 3 ? (<button className="btn-next" type="button" onClick={() => setStep( step +  1)}>Next</button>): (<input type="submit" className="btn-next" value="Submit Form"/>)}
                </div>
            </form>
        </div>
    )
}

export default FormContainer
