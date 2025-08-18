import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import Dashboard from '@mui/icons-material/Dashboard'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { colors } from '@mui/material'
function BoardBar() {
  const MENU_STYLE ={
    color: 'white',
    bgcolor: 'transparent',
    border:'none',
    paddingX: '5px',
    borderRadius: '4px',
    '.MuiSvgIcon-root': {
      color: 'white'
    },
    '&:hover': {
      bgcolor: 'primary.50'
    }

  }
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.timeble.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflow:'auto',
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
    }}>
      <Box sx={{ display:'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<Dashboard/>}
          label="HoanDev WeekTimetable"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Board"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display:'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white'
          }}
        >
          Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatarGroup-avatar': {
              width: 36,
              height: 36,
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }
          }>
          <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>
          <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src=" " />
          </Tooltip>


        </AvatarGroup>

      </Box>
    </Box>
  )
}

export default BoardBar
