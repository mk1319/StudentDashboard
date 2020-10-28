import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${(props) => props.theme.colors.lplaceholder};
    font-size: 20px;
  }
  .profile {
    width: 45px;
    height: 45px;
    background-color: grey;
    border-radius: 50%;
    cursor: pointer;
  }
`;

function TopHeader() {
  const location = useLocation();

  const title = () => {
    switch (location.pathname) {
      case `${process.env.PUBLIC_URL}/AdmissionForm`:
        return "Admission Form";
      case `${process.env.PUBLIC_URL}/ChangePassword`:
        return "Change Password";
      case `${process.env.PUBLIC_URL}/BookmarkClass`:
        return "Bookmark Class";
      default:
        break;
    }
  };

  return (
    <Container>
      <p>{title()}</p>
      {location.pathname !== `${process.env.PUBLIC_URL}/ChangePassword` && (
        <Link to={`${process.env.PUBLIC_URL}/AdmissionForm`} className="profile" />
      )}
    </Container>
  );
}

export default TopHeader;
