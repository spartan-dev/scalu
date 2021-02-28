import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"

import SquareBlur from "../../components/Squares/SquareBlur"
import Square from "../../components/Squares/Square"

const Squares = () => {
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const sliderHeigth = width > 1024 ? "block" : "none"

  return (
    <>
      <Fade bottom cascade duration={300}>
        <Square
          color="secondary"
          zIndex={-1}
          right={-132}
          top={-62}
          width={142}
          height={102}
          position="absolute"
        />
        <Square
          color="quaternary"
          zIndex={-1}
          right={-220}
          top={265}
          width={142}
          height={102}
          position="absolute"
        />
        <Square
          color="quinary"
          zIndex={-1}
          left={-75}
          top={10}
          width={142}
          height={102}
          position="absolute"
        />
        <SquareBlur
          display={sliderHeigth}
          color="primary"
          zIndex={-1}
          left={220}
          top={-150}
          width={142}
          height={102}
          position="absolute"
          filter="blur(3px)"
        />
        <SquareBlur
          color="primary"
          zIndex={-1}
          left={-176}
          top={410}
          width={142}
          height={102}
          position="absolute"
          filter="blur(3px)"
        />
        <Square
          color="accent"
          zIndex={-1}
          left={-32}
          bottom={40}
          width={142}
          height={102}
          position="absolute"
        />
        <SquareBlur
          color="quinary"
          zIndex={-1}
          right={-122}
          bottom={-15}
          width={142}
          height={102}
          position="absolute"
          filter="blur(3px)"
        />
      </Fade>
    </>
  )
}

export default Squares
