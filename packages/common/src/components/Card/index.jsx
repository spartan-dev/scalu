import styled from "styled-components"

import { base } from "../../utils"

/**
 * Cards contain content and actions about a single subject.
 */
const Card = styled.div`
  ${base}
  background: #FFFFFF;
  box-shadow: 0px 36px 64px 16px rgba(34, 39, 43, 0.06);
  border-radius: 8px;
  page-break-inside: avoid;
  break-inside: avoid;
  @media screen and (min-width: 768px) and (max-width: 769px) {
    padding-left: 196px;
    padding-right: 196px;
    width: 668px;
  } ;
`

export default Card
