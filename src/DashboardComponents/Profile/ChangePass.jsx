import React,{useState,useEffect} from 'react';
import styled from "styled-components/macro";
import { Button, TextField } from "@material-ui/core";
import axios from 'axios';
import { connect } from "react-redux";

const Container = styled.section`
  margin-top: 72px;
  min-width: 100%;
  column-gap: 36px;
  button {
    background-color: ${(props) => props.theme.colors.panelsDark} !important;
    color: white;
  }
`;


function ChangePass({ID}){

    const[msg,setmsg]=useState("")
    const [match,setmatch]=useState(false)
    const [pass,setpass]=useState("")

    function handlesubmit(){
        
        axios.post("http://localhost:5000/User/ChangePassword",{
            ID:ID,
            Password:pass,
            match:match
        })
        .then((res)=>{

            setmsg(res.data.msg)
            setmatch(res.data.status)
            console.log(res.data)
        })
    }
    


    return (
        <Container>
            <TextField
                required
                value={pass}
                onChange={(e)=>setpass(e.target.value)}
                label={match?"New Password":"old Password"}
                name="currentStd"
                autoComplete="off"
                variant="outlined"
                placeholder="old Password"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br/>
            <Button
                onClick={()=>handlesubmit()}
                type="submit"
                color="primary"
                style={{marginTop: "20px" }}
                variant="contained"
            >
               {match?"Change Password":"Enter"}
            </Button>  <label style={{color:"green"}}>{msg}</label>
        </Container>
    )
}


const maptoprops = (state) => ({
    ID: state.Login.ID,
  });

export default connect(maptoprops,{})(ChangePass)