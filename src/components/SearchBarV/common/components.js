/* eslint-disable no-prototype-builtins */
/* eslint-disable react/display-name */
import * as React from 'react'
import TextField from '@mui/material/TextField'
import { autocompleteClasses } from '@mui/material/Autocomplete'
import useMediaQuery from '@mui/material/useMediaQuery'
import Popper from '@mui/material/Popper'
import { useTheme, styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { VariableSizeList } from 'react-window'

const LISTBOX_PADDING = 8 // px

// Adapter for react-window
export const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, renderRow, ...other } = props
  const itemData = []
  children.forEach((item) => {
    itemData.push(item)
    itemData.push(...(item.children || []))
  })

  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  })

  const itemCount = itemData.length
  const itemSize = smUp ? 36 : 48

  const getChildSize = (child) => {
    if (child.hasOwnProperty('group')) {
      return 48
    }

    return itemSize
  }

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0)
  }

  const gridRef = useResetCache(itemCount)

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {(rowProps) => {
            const { data, index, style } = rowProps
            const dataSet = data[index]
            const inlineStyle = {
              ...style,
              top: style.top + LISTBOX_PADDING,
            }

            const option = dataSet[1] ?? {}

            return (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...dataSet[0]}
                style={inlineStyle}
              >
                {renderRow(option) ?? (
                  <>
                    <small
                      style={{
                        display: `inline-block`,
                        color: `gray`,
                      }}
                    >
                      {`value: `}
                    </small>
                    {option.value}
                  </>
                )}
              </Box>
            )
          }}
          {/* {renderRow} */}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  )
})

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 50px;
  }
`

const OuterElementContext = React.createContext({})

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext)
  return <div ref={ref} {...props} {...outerProps} />
})

function useResetCache(data) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true)
    }
  }, [data])
  return ref
}

export const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
})
