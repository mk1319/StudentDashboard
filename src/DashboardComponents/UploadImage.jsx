import React, { useState } from "react";
import styled from "styled-components/macro";
import { MdCloudUpload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const InnerModal = styled.div`
  height: 70vh;
  width: 30%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  z-index: 25;
  position: relative;
  .picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: grey;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  form {
    margin-top: 20px;
  }
  .upload-icon {
    transition: color ease 0.5s;
    color: grey;
    &:hover {
      color: black;
    }
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${(props) => props.theme.colors.google};
    transition: color ease 0.5s;
    &:hover {
      color: ${(props) => props.theme.colors.like};
    }
  }
  svg {
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }
`;

function UploadImage({ children, ID, uploadstatus, picture }) {
  const [openModal, setOpenModal] = useState(false);

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async () => {
    if (file === "") {
      return setFilename("Choose file first!");
    } else {
      const formData = new FormData();
      formData.append("file", file);
      try {
        await axios
          .post(
            `https://data.educationmandal.com/api/TeacherDash/UploadImage/${ID}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: (progressEvent) => {
                setUploadPercentage(
                  parseInt(
                    Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    )
                  )
                );
                setTimeout(() => setUploadPercentage(0), 3000);
              },
            }
          )
          .then((res) => {
            uploadstatus();
            setFile("");
            setFilename(res.data.msg);
            setTimeout(() => {
              setOpenModal(!openModal);
            }, 100);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="trigger" onClick={() => setOpenModal(!openModal)}>
        {children}
      </div>

      {openModal && (
        <Modal>
          <InnerModal>
            <IoIosCloseCircle
              className="close"
              size="2rem"
              onClick={() => setOpenModal(!openModal)}
            />
            <div
              className="picture"
              style={{
                backgroundImage: file && `url(${URL.createObjectURL(file)})`,
              }}
            />
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <MdCloudUpload className="upload-icon" size="2rem" />
                <input type="file" onChange={onChange} />
              </label>
            </form>
            <label>{filename}</label>
            <br />
            {uploadPercentage ? (
              <progress
                value={uploadPercentage}
                max="100"
                style={{ width: "80%", height: "20px" }}
              />
            ) : (
              <button
                onClick={() => {
                  onSubmit();
                }}
              >
                Upload
              </button>
            )}
          </InnerModal>
        </Modal>
      )}
    </>
  );
}

export default UploadImage;
