import styled from "styled-components"
import { base, theme } from "../../utils"
import Experiencia from "../../../../themes/src/Startup/assets/experiencia.svg"
import Multiplica from "../../../../themes/src/Startup/assets/multiplica.svg"

/**
 * Use prestyled images
 */
const Img = styled.img`
  ${base};
  ${theme("Img")};
  @media (min-width: 1025px) {
    padding-top: ${props =>
      // eslint-disable-next-line no-nested-ternary
      props.src === Experiencia
        ? `46px`
        : props.src === Multiplica
        ? `17px`
        : ""};
  }
`

export default Img
