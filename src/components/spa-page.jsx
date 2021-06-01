import React, { useRef } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import server from "./server.svg"
import bash from "./bash.svg"
import stars from "./stars.svg"
import satellite4 from "./satellite4.svg"
import clientsMain from "./clients-main.svg"
import styled from "styled-components"

const ParallaxLayer1 = styled(ParallaxLayer)`
  display: flex;
  align-items: center;
  justify-content: center;
`

function SpaPage() {
  const refParallax = useRef()

  const jumpTo = (page) => refParallax.current.scrollTo(page)

  return (
    <Parallax pages={3} ref={(ref) => (refParallax.current = ref)}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#805E73" }}
      />

      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: "#87BCDE" }}
      />

      <ParallaxLayer
        offset={1.3}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={satellite4}
          alt="satellite"
          style={{ width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: `url(${stars})`, backgroundSize: "cover" }}
      />

      <ParallaxLayer1 offset={0} speed={0.1} onClick={() => jumpTo(1)}>
        <img src={server} alt="server" style={{ width: "20%" }} />
      </ParallaxLayer1>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => jumpTo(2)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={bash} alt="bash shell" style={{ width: "40%" }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => jumpTo(0)}
      >
        <img
          src={clientsMain}
          alt="main client shell"
          style={{ width: "40%" }}
        />
      </ParallaxLayer>
    </Parallax>
  )
}

export default SpaPage
