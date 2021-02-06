import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  

  & + & {
    margin-left: ${props => props.theme?.space?.[2] || 4}px;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  ${theme('Button')};
  ${base};
`;

export const TextWrapper = styled.span`
  ${theme('Button.Text')};
  ${base};
`;

export const IconWrapper = styled.span`
  ${theme('Button.Icon')};
  ${base};
`;
