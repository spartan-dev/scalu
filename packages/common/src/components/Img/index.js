import styled from 'styled-components';
import { base, theme } from '../../utils';
import Experiencia from "./../../../../themes/src/Startup/assets/experiencia.svg"

/**
 * Use prestyled images
 */
const Img = styled.img`
  ${base};
  ${theme('Img')};
  @media (min-width: 1025px) {
    padding-top: ${props => (props.src === Experiencia ? `47px` : '')};
  }
`;

export default Img;
