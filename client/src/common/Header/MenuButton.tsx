import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../styles/svg/hamburger.svg';
import Button from '../../common/Button';
import MenuModal from './MenuModal';

const CustomButton = styled(Button)`
  width: 30px;
  height: 30px;
`;

function MenuButton() {
  const [menuSwitch, toggleMenuSwitch] = useState(false);
  return (
    <>
      <CustomButton
        onClick={() => {
          toggleMenuSwitch(true);
        }}
      >
        <MenuIcon />
      </CustomButton>
      {menuSwitch && <MenuModal toggleMenuSwitch={toggleMenuSwitch} />}
    </>
  );
}

export default MenuButton;
