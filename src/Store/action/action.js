import {GET_LOGIN_STATUS,LOGOUT} from './type';
import jwt from 'jwt-simple';


export const Get_Status = () => async(dispatch) => {
    try {
        let Data={isLogin:false}
        if(localStorage.getItem('StudetntLogin')!==null)
        {
            Data=jwt.decode(localStorage.getItem('StudetntLogin'),process.env.REACT_APP_KEY)
        }
        dispatch({
            type:GET_LOGIN_STATUS, 
            payload: Data
        })
    }catch (err) {
      console.log(err);
    }
  };

export const Logout=()=>async(dispatch)=>{
    try{
        
        localStorage.removeItem("StudetntLogin")

        dispatch({
            type:LOGOUT,
            payload:{isLogin:false}
        })

    }catch(err){
        console.log(err)
    }

}