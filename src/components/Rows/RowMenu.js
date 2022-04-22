import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import {
  row_delete,
  row_down,
  row_reverseDirection,
  row_up,
  row_duplicate,
} from 'actions/localstorage/rowsActions'
import { ArrowDownward, Delete } from '@mui/icons-material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Fragment, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'

export default function RowMenu(props) {
  const { iOnglet, iPage, iRow, velib, velibData } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const navigate = useNavigate()
  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {velib ? null : (
          <MenuItem onClick={() => row_reverseDirection(iOnglet, iPage, iRow)}>
            <ListItemIcon>
              <CompareArrowsIcon fontSize="small" />
            </ListItemIcon>
            Reverse direction
          </MenuItem>
        )}
        <MenuItem onClick={() => row_up(iOnglet, iPage, iRow)}>
          <ListItemIcon>
            <ArrowUpwardIcon fontSize="small" />
          </ListItemIcon>
          Row to up
        </MenuItem>
        <MenuItem onClick={() => row_down(iOnglet, iPage, iRow)}>
          <ListItemIcon>
            <ArrowDownward fontSize="small" />
          </ListItemIcon>
          Row to down
        </MenuItem>
        <MenuItem onClick={() => row_duplicate(iOnglet, iPage, iRow)}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          Row duplicate
        </MenuItem>
        <MenuItem
          onClick={() =>
            navigate('/pageAddRow', { state: { iRow } })
          }
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Row edit
        </MenuItem>
        <MenuItem onClick={() => row_delete(iOnglet, iPage, iRow)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Row delete
        </MenuItem>
      </Menu>
    </Fragment>
  )
}
