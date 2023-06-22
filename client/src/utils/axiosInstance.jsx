import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';



export const Authaxios = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    withCredentials: true,
})



// // Add a request interceptor
// Authaxios.interceptors.request.use(async function (config) {
//     // Do something before request is sent
//     console.log('interceptor request:',config)
//     return config;
//   }, function (error) {
//     console.log('interceptor request error:', error)
//     // Do something with request error
//     return Promise.reject(error);
//   });






// // Add a response interceptor
// const responseInterceptor = Authaxios.interceptors.response.use( async function (response) {
  
//   // let navigate = useNavigate()
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log('interceptor response', response)
//     return response;
//   }, async function (error) {
//     // const navigate = useNavigate();
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const originalRequest = error.config
//     console.log('interceptor response error:', error)
//     if(error.response.status === 403 || !originalRequest._retry){
//       originalRequest._retry = true;

//       // If you need to remove an interceptor later you can.
//       // Authaxios.interceptors.response.eject(responseInterceptor);
//       if(!Cookies.get('refresh_token')){
//         console.log('no refresh token')
//         window.location.href='/login'
//         // navigate('/login')
//         return Promise.reject(error)
        
//       }
//       const refreshTokenReq = await Authaxios({
//         method:'post',
//         url: '/refresh',
//         data: {
//           'refresh_token': Cookies.get('refresh_token')
//         }
//       })
//       const token =  refreshTokenReq.data;
//       console.log(token)
//       Cookies.set('access_token', token?.message);
//       return Authaxios(originalRequest)
//       // attach the token to the request header after response error
       
//     }
//     console.log('interceptor response error', error)
//     return Promise.reject(error);
//   });