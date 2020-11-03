import React from "react";
import styled from "styled-components/macro";
import { useForm, useStep } from "react-hooks-helper";
import Personal from "./StepForm/Personal";
import Parent from "./StepForm/Parent";
import Academics from "./StepForm/Academics";
import { connect } from "react-redux";

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

function AdmissionForm({ ID }) {
  const defaultData = {
    name: "",
    surname: "",
    gender: "",
    dob: "",
    email: "",
    contact: "",
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
  };

  const steps = [{ id: "personal" }, { id: "academics" }, { id: "parent" }];

  const [formData, setFormData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 1,
  });

  const props = { formData, setFormData, navigation };

  const handleSubmit = () => {
    console.log("Working");
  };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;

    case "academics":
      return <Academics {...props} />;

    case "parent":
      return <Parent {...props} handleSubmit={handleSubmit} />;

    default:
      break;
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

export default connect((state) => ({ ID: state.Login.ID }), {})(AdmissionForm);
