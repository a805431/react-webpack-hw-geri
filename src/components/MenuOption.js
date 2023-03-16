import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// const NavbarLinkStyles = styled.a`
//   display: flex;
//   align-items: center;
//   background: #ffffff;
//   padding: 12px;
//   text-decoration: none;
//   font-weight: bold;
//   border-bottom: 1px solid #ffffff;
//   color: #696969;
//   font-size: 0.85rem;
// `;

const linkStyles = {
  "display": "flex",
  "alignItems": "center",
  "background": "#ffffff",
  "padding": "12px",
  "textDecoration": "none",
  "fontWeight": "bold",
  "borderBottom": "1px solid #ffffff",
  "color": "#696969",
  "fontSize": "0.85rem",
};

const ImgStyles = styled.img`
  margin-right: 15px;
`;
//NavbarLinkSTyles тага го промених на Link тага, после на NavLink
function MenuOption({ title, image, altDesc, routePath }) {
  return (
    <NavLink to={routePath} className="navbar-link" 
    style={({isActive}) => (isActive ? {...linkStyles, color: "green"}: {...linkStyles})}>
      <span>
        <ImgStyles className="imageIcon" src={image} alt={altDesc} />
      </span>
      {title}
    </NavLink>
  );
}

export default MenuOption;
