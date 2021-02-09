import styled from "styled-components";


export const Details = styled.details`
 display: block;   
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33% ;
    align-items: flex-start;
  }
  
`;

export const Summary = styled.summary`
  display: flex;
  flex-direction: row;
  border-bottom: solid;
  margin-bottom: 31px;
  padding-bottom: 9px;
  justify-content: center;
  color: ${props => props.color || ''};
  ::-webkit-details-marker {
  display: none;
}
`;

export const Accordion = styled.div`
  cursor: pointer;
  width: 100%;
  outline: none;
`;