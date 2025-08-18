import { Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
function Column() {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (<Box
    sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
      ml:2,
      borderRadius:'6px',
      height:'fit-content',
      maxHeight : (theme) => `calc(${theme.timeble.boardContentHeight} - ${theme.spacing(5)})`
    }}
  >
    {/* Header */}
    <Box sx={{
      height: (theme) => theme.timeble.columnHeaderHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p:2
    }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>Column Header</Typography>
      <Box>
        <Tooltip title="more options">
          <ExpandMoreIcon
            sx={{
              color: 'text.primary',
              cursor: 'pointer'
            }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <AddCardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add new card</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon> <Cloud fontSize="small" /> </ListItemIcon>
            <ListItemText>Archive this column</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon> <DeleteForeverIcon fontSize="small" /> </ListItemIcon>
            <ListItemText>Remove this column</ListItemText>
          </MenuItem>

        </Menu>
      </Box>
    </Box>

    {/* body */}

    <ListCards />

    {/* footer */}
    <Box sx={{
      height: (theme) => theme.timeble.columnFooterHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p:2
    }}>
      <Button startIcon={<AddCardIcon />} color="primary">
             Add New Card
      </Button>
      <Tooltip title='Drag to move'>
        <DragHandleIcon sx={{ cursor: 'pointer' }} />
      </Tooltip>
    </Box>
  </Box>


  )
}

export default Column