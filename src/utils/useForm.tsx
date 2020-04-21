import {useState} from 'react';


const useForm:any = (formValues:Object) =>{
    const[state,setState] = useState(formValues);

    const handleChange = (e:any) =>{
        e.persist();
        setState(state=>({...state,[e.target.name]:e.target.value}));
    }
    
    return [state,handleChange];
    
}

export default useForm;