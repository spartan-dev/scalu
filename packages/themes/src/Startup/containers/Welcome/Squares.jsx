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
      left={-25}
      top={124}
      width={142}
      height={80}
      position="absolute"
    />
    <Square
      color="quinary"
      zIndex={2}
      right={-15}
      bottom={-24}
      width={142}
      height={80}
      position="absolute"
    />
    <SquareBlur
      color="quaternary"
      zIndex={-1}
      left={-115}
      bottom={60}
      width={146}
      height={102}
      position="absolute"
      filter="blur(5px)"
    />
    <SquareBlur
      color="accent"
      zIndex={-1}
      left={120}
      top={-70}
      width={146}
      height={102}
      position="absolute"
      filter="blur(5px)"
    />
    <SquareBlur
      color="quinary"
      zIndex={-1}
      right={-106}
      bottom={113}
      width={146}
      height={102}
      position="absolute"
      filter="blur(5px)"
    />
  </Fade>
)

export default Squares
