import MenuOption from "./components/MenuOption";
import MyHeader from "./components/MyHeader";
import HeaderImage from "./assets/images/headerImage.jpg";
import AtFarmLogo from "./assets/images/at_farm_logo.png";

function App() {
   return (
      <div>
         <MyHeader title="This is a Mock Header" image={HeaderImage} altDesc="header image"/>
         <MenuOption title="Current Farm" image={AtFarmLogo} altDesc="current farm"/>
         <MenuOption title="Fields" image={AtFarmLogo} altDesc="nutrition plan"/>
         <MenuOption title="Nutrition Plan" image={AtFarmLogo}/>
      </div>
   );
}

export default App;