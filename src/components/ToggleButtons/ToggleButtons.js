import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"

export default function ToggleButtons({ elements, onSelect }) {
  const [alignment, setAlignment] = useState(null)

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
    onSelect(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {elements.map((e,i) => {
        if(! e.value) return null
        return (
          <ToggleButton
            value={e.value}
            aria-label="left aligned"
            key={i}
            disabled={e.value == `rer`}
          >
            <img style={{ height: `2em` }} src={e.imgSrc} />
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  )
}
