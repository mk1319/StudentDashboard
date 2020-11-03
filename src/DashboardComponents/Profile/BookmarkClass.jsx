import React from "react";
import styled from "styled-components/macro";
import { BsLink45Deg } from "react-icons/bs";

const BookmarkPill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  .link-container {
    color: ${(props) => props.theme.colors.lParagraph};
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
    transition: all ease 0.3s;
    display: grid;
    place-items: center;
    &:hover {
      background-color: rgba(245, 245, 245, 0.5);
      color: ${(props) => props.theme.colors.lHeading};
    }
  }
`;
function BookmarkClass() {
  return (
    <BookmarkPill>
      <h4>Mahesh Tutorials</h4>
      <a href="" className="link-container">
        <BsLink45Deg size="1.5rem" />
      </a>
    </BookmarkPill>
  );
}

export default BookmarkClass;
