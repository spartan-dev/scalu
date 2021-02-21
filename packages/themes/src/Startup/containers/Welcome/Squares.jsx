import React from "react"
import Fade from "react-reveal/Fade"

import Square from "../../components/Squares/Square"
import SquareBlur from "../../components/Squares/SquareBlur"

const Squares = () => (
  <Fade bottom cascade duration={300}>
    <Square
      color="accent"
      zIndex={2}
      right={-103}
      top={-47}
      width={142}
      height={80}
      position="absolute"
    />
    <Square
      color="quaternary"
      zIndex={2}
      left={-24}
      top={124}
      width={142}
      height={80}
      position="absolute"
    />
    <Square
      color="quinary"
      zIndex={2}
      right={40}
      bottom={-22}
      width={142}
      height={80}
      position="absolute"
    />
    <SquareBlur
      color="secondary"
      zIndex={-1}
      left={-115}
      bottom={60}
      width={146}
      height={102}
      position="absolute"
      filter="blur(3px)"
    />
    <SquareBlur
      color="quinary"
      zIndex={-1}
      left={80}
      top={-76}
      width={146}
      height={102}
      position="absolute"
      filter="blur(3px)"
    />
    <SquareBlur
      color="primary"
      zIndex={-1}
      right={-106}
      bottom={113}
      width={146}
      height={102}
      position="absolute"
      filter="blur(3px)"
    />
  </Fade>
)

export default Squares
