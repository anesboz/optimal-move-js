import react, { useState } from "react"
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter"
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight"
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { om_assets } from "variables/data"

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
