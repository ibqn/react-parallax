import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #253237;
  }

	html, body, div, a, i, button, select, option, optgroup, hr, br {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
  }
`

export default GlobalStyle
