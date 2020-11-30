import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../styles/svg/hamburger.svg';
import Button from '../../components/Button';

const CustomButton = styled(Button)`
  width: 30px;
  height: 30px;
`;

function Menu() {
  // const [openMenu, setOpenMenu] = useState(false);
  return (
    <CustomButton>
      <MenuIcon />
    </CustomButton>
  );
}

export default Menu;
