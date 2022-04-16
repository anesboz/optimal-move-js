import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  page_delete,
  page_left,
  page_right,
} from 'actions/localstorage/pagesActions'
import { ArrowLeft, ArrowRight, Delete, Edit } from '@mui/icons-material'
import { Fragment, useState } from 'react'
import { onglet_delete } from 'actions/localstorage/ongletsActions'

export default function PageMenu(props) {
  const { iOnglet, iPage } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
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
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
        <MenuItem onClick={() => page_delete(iOnglet, iPage)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete Page
        </MenuItem>
        <MenuItem
          onClick={() => {
            page_left(iOnglet, iPage)
          }}
        >
          <ListItemIcon>
            <ArrowLeft fontSize="small" />
          </ListItemIcon>
          Move Left
        </MenuItem>
        <MenuItem
          onClick={() => {
            page_right(iOnglet, iPage)
          }}
        >
          <ListItemIcon>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
          Move Right
        </MenuItem>
        <MenuItem onClick={() => onglet_delete(iOnglet)}>
          <ListItemIcon>
            <Delete fontSize="small" color="error" />
          </ListItemIcon>
          <span style={{ color: 'red' }}>Delete Onglet</span>
        </MenuItem>
      </Menu>
    </Fragment>
  )
}
