import React,{useState,useEffect} from "react";
import styled from "styled-components/macro";
import BookmarkClass from "./BookmarkClass";
import { connect } from "react-redux";
import axios from 'axios';

const Container = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
`;

function Bookmark({id}) {


  const[Bookmark,setBookmark]=useState([])

  useEffect(()=>{
    axios.get(`https://data.educationmandal.com/api/User/AllBookmark/${id}`)
    .then((res)=>{
      setBookmark(res.data)
    })

  },[])
  return (
    <Container>
      {    
        Bookmark.map((data)=><BookmarkClass data={data} key={data.ClassID}/>)
      }
    </Container>
  );
}


const maptoprops = (state) => ({
  id: state.Login.ID
});

export default connect(maptoprops,{})(Bookmark);
