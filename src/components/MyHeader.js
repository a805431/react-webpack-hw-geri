import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: rgb(116, 207, 55);
  color: rgb(194, 47, 47);
  height: 120px;
  width: 100%;
  text-align: center;
  margin: 0 0 10px;
`;

const ImageStyles = styled.img`
  border-radius: 50%;
  height: 120px;
  float: left;
`;

const H1Styles = styled.h1`
  text-align: left;
  margin: 0;
`;

function MyHeader({ title, image, altDesc }) {
  return (
    <HeaderStyles>
      <ImageStyles src={image} alt={altDesc} />
      <H1Styles>{title}</H1Styles>
    </HeaderStyles>
  );
}

export default MyHeader;
