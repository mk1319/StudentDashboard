import React from "react";
import styled from "styled-components/macro";
import { useForm, useStep } from "react-hooks-helper";
import Personal from "./StepForm/Personal";
import Parent from "./StepForm/Parent";
import Academics from "./StepForm/Academics";
import { connect } from "react-redux";
import axios from 'axios';
import { useState,useEffect } from "react";

const Container = styled.section`
  margin-top: 72px;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  button {
    background-color: ${(props) => props.theme.colors.panelsDark} !important;
    color: white;
    border-radius: 5px;
    padding: 12px 24px;
  }
  .form-group {
    margin-bottom: 36px;
    input,
    textarea {
      min-width: 350px;
    }
    label {
      display: block;
      font-size: 18px;
      color: ${(props) => props.theme.colors.lHeading};
      margin-bottom: 8px;
    }
  }
  p {
    text-align: center;
    font-size: 18px;
    margin-top: 12px;
    color: ${(props) => props.theme.colors.lplaceholder};
    transition: color 0.5s ease;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.lHeading};
    }
  }
`;

// const ImageContainer = styled.div`
//   .class-image {
//     margin: 0 auto;
//     width: 300px;
//     height: 300px;
//     background-color: grey;
//     border-radius: 50%;
//     position: relative;
//     background-image: ${({ picture }) =>
//       picture &&
//       `url(https://data.educationmandal.com/assest/Class/Teacher/${picture})`};
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     .preview {
//       position: absolute;
//       right: 16px;
//       top: 16px;
//       .icon {
//         padding: 16px;
//         box-sizing: content-box;
//         border-radius: 50%;
//         background-color: #f5f5f5;
//         color: ${(props) => props.theme.colors.lParagraph};
//       }
//     }
//   }
// `;

function AdmissionForm({ ID,Email,Contact,Name}) {


  const [Admissionform,setAdmissionform]=useState([])
  const[render,setrender]=useState(false)
  
  const defaultData = {
    ID:ID,
    name: Name,
    surname: "",
    gender: "",
    dob: "",
    email: Email,
    contact: Contact,
    currentAddress: "",
    language: "",
    currentStd: "",
    currentInstitution: "",
    prevPercentage: "",
    prevInstitution: "",
    stream: "",
    hobbies: "",
    fatherName: "",
    fatherContact: "",
    fatherEmail: "",
    fatherQualification: "",
    fatherOccupation: "",
    motherName: "",
    motherContact: "",
    motherEmail: "",
    motherQualification: "",
    motherOccupation: "",
    Aid:0
  };


  useEffect(()=>{
    axios.get(`https://data.educationmandal.com/api/User/Admission/${ID}`)
    .then((res)=>{
      setAdmissionform(res.data)
      if(res.data.length)
      {
        defaultData.name=res.data[0].Name
        defaultData.surname=res.data[0].Surname
        defaultData.Aid=res.data[0].Aid
        defaultData.gender=res.data[0].Gender
        defaultData.dob=res.data[0].Date_of_birth
        // defaultData.email=res.data[0].Email
        defaultData.contact=res.data[0].Contact
        defaultData.currentAddress=res.data[0].Address
        defaultData.language=res.data[0].Language
        defaultData.currentStd=res.data[0].Cur_std
        defaultData.currentInstitution=res.data[0].Cur_Inst
        defaultData.prevPercentage=res.data[0].Percentage
        defaultData.prevInstitution=res.data[0].Prev_Inst
        defaultData.stream=res.data[0].Stream
        defaultData.hobbies=res.data[0].Hobbies
        defaultData.fatherName=res.data[0].Father
        defaultData.fatherContact=res.data[0].FatherContact
        defaultData.fatherEmail=res.data[0].FatherEmail
        defaultData.fatherQualification=res.data[0].FatherQualif
        defaultData.fatherOccupation=res.data[0].Fatheroccu
        defaultData.motherName=res.data[0].Mother
        defaultData.motherContact=res.data[0].MotherContact
        defaultData.motherEmail=res.data[0].MotherEmail
        defaultData.motherQualification=res.data[0].MotherQualif
        defaultData.motherOccupation=res.data[0].Motheroccu
      }
      setrender(true)
    })
  },[])


  const steps = [{ id: "personal" }, { id: "academics" }, { id: "parent" }];

  const [formData, setFormData] = useForm(defaultData);
  const[msg,setmsg]=useState('')
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setFormData, navigation };

  const handleSubmit =()=> {
    axios.post('https://data.educationmandal.com/api/User/Admission',{
      formData:formData
    })
    .then((res)=>{
      setmsg(res.data.msg)
    })

    setTimeout(()=>{
      setmsg("")
    },2000)
  };

if(render){
  switch (step.id) {
    case "personal":
      return <Personal {...props} />;

    case "academics":
      return <Academics {...props} />;

    case "parent":
      return <Parent {...props} handleSubmit={handleSubmit} msg={msg}/>;

    default:
      break;
  }
}

  //const [PictureUploadStatus, setPictureUploadStatus] = useState(false);

  //Use For Upload Picture (Remove  that)
  // const uploadstatus = () => {
  //   setPictureUploadStatus(!PictureUploadStatus);
  // };

  return (
    <Container>
      <h1>Form</h1>

      {/* <ImageContainer picture={Data.picture}>
        <div className="class-image">
          <a
            title="View Profile"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://educationmandal.com/Teacher/${Data.name}/${ID}`}
            className="preview"
          >
            <RiShareBoxLine className="icon" size="1.5em" />
          </a>
        </div>
        <UploadImage
          ID={ID}
          uploadstatus={uploadstatus}
          picture={`https://data.educationmandal.com/assest/Class/Teacher/${Data.picture}`}
        >
          <p>Change Picture</p>
        </UploadImage>
      </ImageContainer> */}
    </Container>
  );
}

export default connect((state) => ({ ID: state.Login.ID,Email:state.Login.Email,
                                      Contact:state.Login.Contact,
                                    Name:state.Login.Name }), {})(AdmissionForm);
