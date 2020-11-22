import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components/macro";
import RightPanel from "./DashboardComponents/RightPanel";
import Sidebar from "./DashboardComponents/Sidebar";
import { connect } from "react-redux";
import { Get_Status } from "./Store/action/action";

const AppContainer = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
`;

function App({ Get_Status, Login }) {
 
  const [load, setload] = useState(false);

  useEffect(() => {
    Get_Status().then(setload(true));
  }, [Get_Status]);

  return load ? (
    <AppContainer>
      <BrowserRouter>
        {Login ? <Sidebar /> : ""}
        <RightPanel Login={Login} />
      </BrowserRouter>
    </AppContainer>
  ) : (
    <></>
  );
}

const maptoprops = (state) => ({
  Login: state.Login.islogin,
});

export default connect(maptoprops, { Get_Status })(App);