import { createGlobalStyle } from 'styled-components'
import Bold from 'fonts/Ubuntu-Bold.ttf'
import Light from 'fonts/Ubuntu-Light.ttf'
import Regular from 'fonts/Ubuntu-Regular.ttf'

const GlobalStyle = createGlobalStyle`
* {
  list-style:none;
  background:#FFFFFF;
  font-family: 'Ubuntu',sans-serif;
  
}

@font-face{
  font-family:'Ubuntu';
 src:local('Ubuntu Light'),
 url(${Light}) format('truetype');
 font-weight:300
}
@font-face{
  font-family:'Ubuntu';
 src:local('Ubuntu Regular'),
 url(${Regular}) format('truetype');
 font-weight:400
}
@font-face{
  font-family:'Ubuntu';
 src:local('Ubuntu Bold'),
 url(${Bold}) format('truetype');
 font-weight:700
}

body{
  font-family: 'Ubuntu',sans-serif;
}

`

export default GlobalStyle
