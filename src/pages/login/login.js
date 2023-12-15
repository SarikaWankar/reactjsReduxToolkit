import react from react;
import { post } from "../../api/api";
import {loginURL} from '../../api/urls'
const Login=()=>{
    const submit=async()=>{
        const payload=JSON.stringify({
    
            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
          })
        await post(loginURL,payload)
    }
    return <div>
       username: 'kminchelle',
    password: '0lelplR',

    <button onClick={submit()}>Login</button>
    </div>
}