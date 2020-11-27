import React from 'react';
import { useState } from 'react';
import styled from "styled-components/macro";
import axios from 'axios';
import { connect } from "react-redux";

const Container = styled.section`
  margin-top: 72px;
  min-width: 100%;
  `
const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  align-items: center;
  row-gap: 24px;
  margin-top: 30px;
  max-width: 820px;
  input {
    flex: 1;
    width: stretch;
  }

  button {
    justify-self: flex-start;
    &.add {
      grid-row: 2;
      background-color: ${(props) => props.theme.colors.panelsDark} !important;
      color: white;
      border-radius: 5px;
      padding: 12px 24px;
    }
  }
`;


function ChangePass({ID}){

    const [Pass,setPass]=useState("")
    const [Status,setStatus]=useState(false)
    const [msg,setmsg]=useState("")

    const handlesubmit=()=>{

        if(Status)
        {
            axios.post('https://data.educationmandal.com/api/User/ChangePassword',{
                ID:ID,
                Password:Pass
            })
            .then((res)=>{
                setmsg(res.data.msg)
                setPass("")
                setTimeout(()=>{
                    setStatus(false)
                    setmsg("")
                },5000)
            })

        }
        else
        {
            axios.post('https://data.educationmandal.com/api/User/CheckPassword',{
                ID:ID,
                Password:Pass
            })
            .then((res)=>{
                setStatus(res.data.Status)
                setmsg(res.data.msg)
                setPass("")
            })
        }
    }

    return(
    <Container>
        <h1>Enter {Status?"New":"Old"} Password:-</h1>
        <h1 style={Status?{color:"Green"}:{color:"Red"}}>{msg}</h1>
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
        <input
          type="text"
          value={Pass}
          onChange={(e)=>setPass(e.target.value)}
          required
          placeholder={Status?"Enter New Password":"Enter Old Password"}
        />

        <button className="add" onClick={()=>handlesubmit()}>
          Enter
        </button>
        <label style={{ color: "green" }}>{}</label>
      </StyledForm>
    </Container>

    )

}

export default connect((state) => ({
    ID: state.Login.ID,
  }))(ChangePass)
  