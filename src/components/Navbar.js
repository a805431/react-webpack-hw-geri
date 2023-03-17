import MenuOption from './MenuOption';
import AtFarmLogo from '../assets/images/at_farm_logo.png';

function Navbar() {
  const menuOptionsProps = [
    {
      routePath: '/current-farm',
      title: 'Current Farm',
      altDesc: 'current farm',
    },
    {
      routePath: "/fields",
        title: "Fields",
        altDesc: "fields",
    },
    {
      routePath: "/nutrition-plan",
        title: "Nutrition Plan",
        altDesc: "nutrition plan"
    }
  ];

  const menuOptions = menuOptionsProps.map((menuOption) => {
    return (
      <MenuOption key={menuOption.title}
      routePath={menuOption.routePath}
      title = {menuOption.title}
      image = {AtFarmLogo}
      altDesc = {menuOption.altDesc}/>
    );
  });

  return (
    <div className="navbar">
      {menuOptions}
    </div>
  );
}

export default Navbar;
