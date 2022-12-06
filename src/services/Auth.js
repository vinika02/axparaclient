import axios from 'axios'
let API_URL = process.env.VUE_APP_AXPARA_API;

const url = API_URL;
axios.defaults.withCredentials = true;  

const  Auth = {
   
        async loginEmail(email) {         
           return await axios.post(API_URL+'auth/login/client/get-email', {
                    email: email
                }
            )
            // return await axios({
            //     method: 'post',
            //     url: API_URL+'auth/login/client/get-email',
            //     data: {
            //         email: email,
            //     },
            //     xsrfCookieName: 'clientSessionId', // default
            // })           
       
        },
        async loginOTP(payload) {  
            let param = {
                email: payload.email,
                password: payload.otp,
            }

            return await axios.post(API_URL+'auth/login/client', param);

            // return await axios({
            //     headers: {
            //         'content-Type': 'application/json',
            //         "Accept": "/",
            //         "Cache-Control": "no-cache",
            //         "Cookie": document.cookie
            //     },
            //     withCredentials: true,
            //     credentials: "cross-origin",
            //     method: 'post',
            //     url: API_URL+'auth/login/client',
            //     data: param,
            //     xsrfCookieName: 'clientSessionId', // default
            // })           
       
        }
  
}
export default Auth;