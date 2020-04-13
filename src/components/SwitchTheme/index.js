import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

export default function SwitchTheme({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={8}
        width={30}
        handleDiameter={15}
        offColor="#E2E2E2"
        onColor="#23343B"
        offHandleColor="#FEFEFE"
        onHandleColor={colors.primary}
      />
    </Container>
  );
}
