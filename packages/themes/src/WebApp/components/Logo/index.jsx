import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

import logo from '../../assets/Logo.svg';

const Img = styled.img`
  display: block;
  width: 151.67px;
  height: 40px;
  ${base};
`;

const Logo = props => <Img src={logo} alt="WebApp" {...props} />;

export default Logo;
