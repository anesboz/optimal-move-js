/* eslint-disable no-prototype-builtins */
/* eslint-disable react/display-name */
import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { Avatar, Button, InputAdornment } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { Chip, Grid } from '@mui/material'
import { useEffect, useRef } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'
// common subFolder
import { lsLoad, lsSave } from './common/utils/utils'
import loader from './common/utils/loader.gif'
import {
  ListboxComponent,
  StyledPopper,
  TextFieldWrapper,
} from './common/components'
import { RefreshList } from './common/RefreshList'

// npm i @mui/lab @mui/material react-window notistack

export default function SearchBarV({
  keyName,
  filters = [], // must contain value
  setSelected = (e) => e,
  multiple = true,
  validateMode = false,
  refreshFun,
  updateFilters,
  renderRow = () => null,
  // others
  error = false,
  disabled,
  title = 'Filtrer sur',
  placeholder = 'Tapez ...',
  helperText = `Incorrect entry.`,
}) {
  const inputRef = useRef()
  const [localSelected, setLocalSelected] = useState([])

  const updateFiltersMode = updateFilters != null
  const [searchTerm, setSearchTerm] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)

  const loading =
    (!updateFiltersMode && filters.length === 0 && !error) ||
    (updateFiltersMode && searchLoading)

  const height = 30

  const [sameFilters, setSameFilters] = useState(false)

  function hundleSave(newValue) {
    setSelected(newValue)
    lsSave({ [keyName]: newValue })
  }

  useEffect(() => {
    if (keyName == null || updateFiltersMode || disabled) return
    const value = lsLoad(keyName) ?? []
    setSelected(value)
    setLocalSelected(value)
  }, [filters])

  // validateMode
  useEffect(() => {
    if (disabled) return
    const a = JSON.stringify(localSelected)
    const b = JSON.stringify(lsLoad(keyName))
    setSameFilters(a === b)
  }, [localSelected])

  // focus
  useEffect(() => {
    if (loading || disabled) return
    inputRef?.current?.focus()
  }, [loading])

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ opacity: disabled ? 0.1 : 1 }}
    >
      {refreshFun == null || disabled ? null : (
        <Grid item ca_lap={1} ca_std={1} ca_xl={1} className="center">
          <RefreshList
            onClickAction={() => {
              // purge
              setLocalSelected([])
              hundleSave([])
              return refreshFun()
            }}
          />
        </Grid>
      )}
      <Grid item justifyContent="center" flex={1}>
        {/* name VALUE extra */}
        <Autocomplete
          // virtual
          loading={loading}
          disableListWrap
          PopperComponent={StyledPopper}
          ListboxComponent={ListboxComponent}
          ListboxProps={{ renderRow }}
          renderOption={(props, option) => [props, option]}
          //
          isOptionEqualToValue={(option, value) => {
            return value?.value === option?.value
          }}
          fullWidth
          size="small"
          autoHighlight
          filterOptions={createFilterOptions({
            stringify: (option) => {
              if (updateFiltersMode) return searchTerm
              return Object.values(option).join('')
            },
            trim: true,
          })}
          multiple
          options={filters.map((e) => ({ ...e, renderRow }))}
          value={localSelected}
          onChange={(event, newValue) => {
            let value = newValue
            if (multiple === false) value = [newValue[newValue.length - 1]]
            value = value ?? []
            setLocalSelected(value)
            if (validateMode) return
            hundleSave(value)
          }}
          getOptionLabel={(option) => `` + option.value ?? ``}
          renderTags={(values, getTagProps) => {
            return values.map((value, index) => {
              if (value) {
                return (
                  <Chip
                    key={index}
                    label={
                      <div className="center">
                        {renderRow(value) ?? (
                          <div>
                            <small
                              style={{
                                display: `inline-block`,
                                color: `gray`,
                              }}
                            >{`value:`}</small>
                            <span>{` ${value.value}`}</span>
                          </div>
                        )}
                      </div>
                    }
                    {...getTagProps({ index })}
                  />
                )
              }
            })
          }}
          renderInput={(params) => {
            const rest = {
              ...params,
              value: updateFiltersMode ? searchTerm : params.value,
            }
            return (
              <TextFieldWrapper
                {...rest}
                inputRef={inputRef}
                label={title}
                placeholder={placeholder}
                inputProps={{
                  ...params.inputProps,
                  disabled,
                  style: { height },
                }}
                error={error}
                helperText={disabled ? null : error ? helperText : null}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <InputAdornment
                        position="start"
                        style={{
                          visibility:
                            disabled || !loading ? `hidden` : `visible`,
                          display:
                            disabled || (!loading && !updateFiltersMode)
                              ? `none`
                              : undefined,
                        }}
                      >
                        <Avatar src={loader} />
                      </InputAdornment>
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
                onChange={(event) => {
                  const value = event.target.value
                  if (
                    !updateFiltersMode ||
                    value == null ||
                    value?.trim().length < 1 ||
                    disabled
                  ) {
                    return
                  }
                  setSearchLoading(true)
                  const delayDebounceFn = setTimeout(() => {
                    updateFilters(value?.trim()).finally(() => {
                      setSearchLoading(false)
                    })
                  }, 1000)
                  setSearchTerm(value)
                  return () => clearTimeout(delayDebounceFn)
                }}
              />
            )
          }}
        />
      </Grid>
      {/* Validate Button */}
      {!validateMode || sameFilters || disabled ? null : (
        <Grid item ca_lap={3} ca_std={2} className="center-y" marginLeft={2}>
          <Button
            onClick={() => {
              hundleSave(localSelected)
              setSameFilters(true)
            }}
            endIcon={<SendIcon />}
            loadingPosition="end"
            variant="contained"
            color="success"
          >
            Appliquer
          </Button>
        </Grid>
      )}
    </Grid>
  )
}
