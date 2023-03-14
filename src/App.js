import MenuOption from "./components/MenuOption";
import MyHeader from "./components/MyHeader";
import HeaderImage from "./assets/images/headerImage.jpg";
import AtFarmLogo from "./assets/images/at_farm_logo.png";
import GlobalCSS from './styles/global.css.js'
import React, { Fragment } from 'react';
import FormCategory from "./components/FormCategory";

function App() {
   return (
      <Fragment>
      <GlobalCSS />
      <div>
         <MyHeader title="This is a Mock Header" image={HeaderImage} altDesc="header image"/>
         <MenuOption title="Current Farm" image={AtFarmLogo} altDesc="current farm"/>
         <MenuOption title="Fields" image={AtFarmLogo} altDesc="nutrition plan"/>
         <MenuOption title="Nutrition Plan" image={AtFarmLogo}/>
         <FormCategory/>
      </div>
      </Fragment>
   );
}

export default App;