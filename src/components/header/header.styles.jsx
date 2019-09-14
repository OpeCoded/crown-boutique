import styled from "styled-components";

import { Link } from "react-router-dom";

//header container
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

//logo container wrapped with link (styled link component)
export const LogoContainer = styled(Link)`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

//options container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//link with option (link with className)
//{css} was imported to allow us to write block of css, i.e the code we want to use more than once
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

//so, for our option link, we use string interpolation to render the container styles
export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`;

//for div with option className
// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
