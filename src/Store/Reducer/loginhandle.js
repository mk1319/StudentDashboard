import {GET_LOGIN_STATUS,LOGOUT} from "../action/type";
  


const checktoken=()=>{
  if(localStorage.getItem("StudetntLogin")){
        return true
    }
  return false
}

const loginstate = {
    islogin:checktoken(),
    ID:0,
    Name:"",
    User:"",
  };


const LoginHandle = (state = loginstate, action) => {

    switch(action.type)
    {
        case GET_LOGIN_STATUS:
            return {...state,
                      islogin:action.payload.isLogin,
                      ID:action.payload.ID,
                      Name:action.payload.Name,
                    }
        case LOGOUT:
          return {islogin:action.payload.isLogin}
        default:
            return state 
    }

  };
  export default LoginHandle;
  