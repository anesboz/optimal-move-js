import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import SaveIcon from '@mui/icons-material/Save'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  page_delete,
  page_isEmpty,
  page_left,
  page_right,
} from 'actions/localstorage/pagesActions'
import { ArrowLeft, ArrowRight, Delete } from '@mui/icons-material'
import { Fragment, useState } from 'react'
import {
  onglet_delete,
  onglet_isEmpty,
  onglet_left,
  onglet_right,
} from 'actions/localstorage/ongletsActions'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import { getData } from 'actions/localstorage/generalActions'
import DeleteDialog from './DeleteDialog'

export default function PageMenu(props) {
  const { iOnglet, iPage } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const navigate = useNavigate()

  const [openDialog, setOpenDialog] = useState()

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
        <MenuItem onClick={() => page_left(iOnglet, iPage)}>
          <ListItemIcon>
            <ArrowLeft fontSize="small" />
          </ListItemIcon>
          Page to Left
        </MenuItem>
        <MenuItem onClick={() => page_right(iOnglet, iPage)}>
          <ListItemIcon>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
          Page to Right
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (page_isEmpty(iOnglet, iPage)) return page_delete(iOnglet, iPage)
            setOpenDialog('page')
          }}
        >
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Page delete
        </MenuItem>
        {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Divider />
        <MenuItem
          onClick={() =>
            navigate('/setting', {
              state: { mode: 'save', onglet: getData(iOnglet) },
            })
          }
        >
          <ListItemIcon>
            <SaveIcon fontSize="small" />
          </ListItemIcon>
          Onglet Save
        </MenuItem>
        <MenuItem onClick={() => onglet_left(iOnglet, iPage)}>
          <ListItemIcon>
            <ArrowLeft fontSize="small" />
          </ListItemIcon>
          Onglet to Left
        </MenuItem>
        <MenuItem onClick={() => onglet_right(iOnglet, iPage)}>
          <ListItemIcon>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
          Onglet to Right
        </MenuItem>
        <MenuItem
          onClick={() =>
            navigate('/addOnglet', { state: { iOnglet_toModify: iOnglet } })
          }
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Onglet edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (onglet_isEmpty(iOnglet)) return onglet_delete(iOnglet, iPage)
            setOpenDialog('onglet')
          }}
        >
          <ListItemIcon>
            <Delete fontSize="small" color="error" />
          </ListItemIcon>
          <span style={{ color: 'red' }}>Onglet delete</span>
        </MenuItem>
      </Menu>
      <DeleteDialog open={openDialog} iOnglet={iOnglet} iPage={iPage} />
    </Fragment>
  )
}
