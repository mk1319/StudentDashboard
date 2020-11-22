import {GET_LOGIN_STATUS,LOGOUT} from "../action/type";
  


const checktoken=()=>{
  if(localStorage.getItem("StudentLogin")){
        return true
    }
  return false
}

const loginstate = {
    islogin:checktoken(),
    ID:0,
    Name:"",
    User:"",
    Email:"",
    Contact:""
  };


const LoginHandle = (state = loginstate, action) => {

    switch(action.type)
    {
        case GET_LOGIN_STATUS:
            return {...state,
                      islogin:action.payload.isLogin,
                      ID:action.payload.ID,
                      Name:action.payload.Name,
                      Email:action.payload.Email,
                      Contact:action.payload.Contact
                    }
        case LOGOUT:
          return {islogin:action.payload.isLogin}
        default:
            return state 
    }

  };
  export default LoginHandle;
  