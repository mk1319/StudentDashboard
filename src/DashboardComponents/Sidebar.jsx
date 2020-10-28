import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import {MdCollectionsBookmark} from "react-icons/md";
import { FiLogOut} from "react-icons/fi";
import {FaWpforms} from 'react-icons/fa'
import {Logout} from '../Store/action/action';
import {connect} from 'react-redux';
import {RiLockPasswordFill} from 'react-icons/ri'

const Container = styled.div`
  height: 100vh;
  width: 8vw;
  min-width: 90px;
  color: white;
  background-color: ${(props) => props.theme.colors.panelsDark};
  padding: 50px 0;
  ul {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    list-style: none;
    li {
      margin: 24px auto;
      a,
      button {
        color: ${(props) => props.theme.colors.dParagraph};
        transition: all 0.3s ease;
        position: relative;
      }
      a::before {
        content: "";
        position: absolute;
        height: 8px;
        width: 8px;
        background-color: ${(props) => props.theme.colors.dGreen};
        border-radius: 50%;
        left: 50%;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.47, 2.09);
        bottom: 0;
        transform: translateX(-50%);
        opacity: 0;
      }
      a.active {
        color: ${(props) => props.theme.colors.dGreen};
        &::before {
          transform: translate(-50%, 12px);
          opacity: 1;
        }
      }
      &:last-of-type {
        margin-top: auto;
        button {
          padding: 0 20px;
          background-color: transparent;
          cursor: pointer;
          &:hover {
            color: ${(props) => props.theme.colors.google};
          }
        }
      }
    }
  }
`;

function Sidebar({Logout}) {




  return (
    <Container>
      <ul>
        <li>
          <NavLink title="Admission Form" to={`${process.env.PUBLIC_URL}/AdmissionForm`}>
            <FaWpforms size="2em" className="sidebar-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink title="BookMark" to={`${process.env.PUBLIC_URL}/BookmarkClass`}>
            <MdCollectionsBookmark size="2em" className="sidebar-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink title="Change-Password" to={`${process.env.PUBLIC_URL}/ChangePassword`}>
            <RiLockPasswordFill size="2em" className="sidebar-icon" />
          </NavLink>
        </li>
        <li>
          <button title="Logout" onClick={()=>{Logout()}}>
            <FiLogOut size="1.8em" strokeWidth="3px" className="sidebar-icon" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
const maptoprops = (state) => ({
  Login:state.Login.islogin,
});


export default connect(maptoprops,{Logout})(Sidebar);
