import MenuOption from './MenuOption';
import AtFarmLogo from '../assets/images/at_farm_logo.png';

function Navbar(){
    return (<div className="navbar">
    <MenuOption
      routePath="/current-farm"
      title="Current Farm"
      image={AtFarmLogo}
      altDesc="current farm"
    />
    <MenuOption
      routePath="/fields"
      title="Fields"
      image={AtFarmLogo}
      altDesc="fields"
    />
    <MenuOption
      routePath="/nutrition-plan"
      title="Nutrition Plan"
      image={AtFarmLogo}
      altDesc="nutrition plan"
    />
  </div>);
}

export default Navbar;