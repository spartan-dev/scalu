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
          right={-120}
          top={-50}
          width={142}
          height={80}
          position="absolute"
        />
        <Square
          color="quaternary"
          zIndex={-1}
          right={-145}
          top={265}
          width={142}
          height={80}
          position="absolute"
        />
        <Square
          color="quinary"
          zIndex={-1}
          left={-115}
          top={30}
          width={142}
          height={80}
          position="absolute"
        />
        <Square
          color="secondary"
          display={sliderHeigth}
          zIndex={-1}
          left={220}
          top={-115}
          width={142}
          height={80}
          position="absolute"
          filter="blur(5px)"
        />
        <SquareBlur
          color="quinary"
          zIndex={-1}
          left={-176}
          bottom={255}
          width={142}
          height={80}
          position="absolute"
          filter="blur(5px)"
        />
        <SquareBlur
          color="accent"
          zIndex={-1}
          left={-90}
          bottom={50}
          width={142}
          height={80}
          position="absolute"
        />
        <SquareBlur
          color="quaternary"
          zIndex={-1}
          right={-110}
          bottom={35}
          width={142}
          height={80}
          position="absolute"
          filter="blur(5px)"
        />
      </Fade>
    </>
  )
}

export default Squares
