import styled from "styled-components"

export const ModalWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
`

export const ModalBox = styled.div`
  width: 620px;
  height: 720px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    padding: 48px;
    overflow-y: scroll;
  }
`
