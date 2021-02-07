import styled from "styled-components";
import Typography from "../../components/Typography"
import { typography } from "../../styles"


export const Details = styled.details`
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33% ;
  margin-bottom: 96px;
`;

export const Summary = styled.summary`
  display: flex;
  flex-direction: row;
  ${Typography.variants.h3};
  border-bottom: solid;
  margin-bottom: 31px;
  padding-bottom: 9px;
  justify-content: center;
  ::-webkit-details-marker {
  display: none;
}
`;

export const Accordion = styled.div`
  cursor: pointer;
  width: 100%;
  outline: none;
`;