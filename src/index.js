import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Theme from "./Theme/Theme";
import { ThemeProvider } from "styled-components";
import {Provider} from 'react-redux'
import store from './Store/store'

render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}> 
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
