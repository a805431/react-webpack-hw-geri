import styled from 'styled-components';

const NavbarLinkStyles = styled.a`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 12px;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid #ffffff;
  color: #696969;
  font-size: 0.85rem;
`;

function MenuOption({ title, image, altDesc }) {
  return (
    <NavbarLinkStyles href="#" className="navbar-link">
      <span>
        <img src={image} alt={altDesc} />
      </span>
      {title}
    </NavbarLinkStyles>
  );
}

export default MenuOption;
