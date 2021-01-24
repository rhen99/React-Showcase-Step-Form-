import {useState} from 'react';

import Personal from '../Personal/Personal';
import Credentials from '../Credentials/Credentials';
import Congratulations from '../Congratulations/Congratulations'
function StepForm({step}) {
   
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        password_confirm: ''

    });
    switch (step) {
        case 1:
            return <Personal form={form} setForm={setForm}/>
        case 2:
            return <Credentials form={form} setForm={setForm}/>
        case 3: 
            return <Congratulations form={form}/>
        default:
            return <h1>An Error Occured.</h1>
    }
}

export default StepForm
