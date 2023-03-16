import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
    margin: 0;
}

.main-container, .flex-container{
    display: flex;
    height: 100%;

}
.flex-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.navbar{
    height: 100%;
    width: 200px;
    background: rgb(255,255,255);
    border-right: 1px solid #C0C0C0;
}
table, th, td {
    border: 1px solid black;
    margin-bottom: 20px;
}

#add-btn-table-category{
    height: 40px;
    width: 120px;
    background-color: rgb(238, 207, 69);
    border-color: rgb(206, 128, 39);
    font-weight: bold;
}`;