import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
    margin: 0;
}
.main-container{
    height: 100%;
}
.main-container, .flex-container{
    display: flex;
}
.navbar{
    height: 100%;
    width: 200px;
    background: rgb(255,255,255);
    border-right: 1px solid #C0C0C0;
}
table, th, td {
    border: 1px solid black;
}`;