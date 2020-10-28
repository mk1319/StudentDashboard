import React from "react";
import styled from "styled-components/macro";
import UploadImage from "../UploadImage";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

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

const ImageContainer = styled.div`
  .class-image {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    background-color: grey;
    border-radius: 50%;
    position: relative;
    background-image: ${({ picture }) =>
      picture &&
      `url(https://data.educationmandal.com/assest/Class/Teacher/${picture})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .preview {
      position: absolute;
      right: 16px;
      top: 16px;
      .icon {
        padding: 16px;
        box-sizing: content-box;
        border-radius: 50%;
        background-color: #f5f5f5;
        color: ${(props) => props.theme.colors.lParagraph};
      }
    }
  }
`;

function AdmissionForm({ ID }) {
 
  const [Data, setData] = useState({
    name: "",
    biography: "",
    experience: "",
    qualification: "",
    msg: "",
    picture: "",
  });

  //const [PictureUploadStatus, setPictureUploadStatus] = useState(false);

  const handlesubmit = () => {
   alert("Submit press")
  };

    //Use For Upload Picture (Remove  that)
  // const uploadstatus = () => {
  //   setPictureUploadStatus(!PictureUploadStatus);
  // };

 
  function handlechange(e) {
    let data = Data;
    setData({ ...data, [e.id]: e.value });
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Enter name"
            type="text"
            value={Data.name}
            onChange={(e) => handlechange(e.target)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="biography">Biography</label>
          <textarea
            id="biography"
            placeholder="biography"
            type="textarea"
            rows="5"
            cols="45"
            value={Data.biography}
            onChange={(e) => handlechange(e.target)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            placeholder="Enter experience"
            type="textarea"
            rows="5"
            cols="45"
            value={Data.experience}
            onChange={(e) => handlechange(e.target)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <textarea
            id="qualification"
            placeholder="Enter qualification"
            type="textarea"
            rows="5"
            cols="45"
            value={Data.qualification}
            onChange={(e) => handlechange(e.target)}
          />
        </div>
        <button
          onClick={() => {
            handlesubmit();
          }}
        >
          Save Changes
        </button>
        <p style={{ color: "green", textAlign: "left" }}>{Data.msg}</p>
      </form>
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

export default connect((state) => ({ ID: state.Login.ID }), {})(AdmissionForm);
