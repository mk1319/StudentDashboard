import React from "react";
import styled from "styled-components/macro";
import BookmarkClass from "./BookmarkClass";

const Container = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
`;

function Bookmark() {
  return (
    <Container>
      <BookmarkClass />
      <BookmarkClass />
      <BookmarkClass />
      <BookmarkClass />
    </Container>
  );
}

export default Bookmark;
