import MenuOption from "./components/MenuOption";
import HeaderImage from "./assets/images/headerImage.jpg";
import AtFarmLogo from "./assets/images/at_farm_logo.png";

console.log(HeaderImage);
console.log(AtFarmLogo);

function App() {
   return (
      <div>
         <div>This is a Mock Header</div>
         <img src={HeaderImage} />
         <img src={AtFarmLogo} />
         <MenuOption title="Current Farm" />
         <MenuOption title="Fields" />
         <MenuOption title="Nutrition Plan" />
      </div>
   );
}

export default App;