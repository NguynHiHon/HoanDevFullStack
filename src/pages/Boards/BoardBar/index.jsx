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
function BoardBar() {
  const MENU_STYLE ={
    color: 'primary.main',
    bgcolor: 'white',
    border:'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
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
      borderTop: '1px solid #00bfa5'
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
        <Button variant="outlined" color="primary" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={
            {
              '& .MuiAvatarGroup-avatar': {
                width: 30,
                height: 30,
                fontSize: '0.875rem',
                bgcolor: 'primary.main'
              }
            }
          } >
          <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>  <Tooltip title="HoanDev">
            <Avatar
              alt="hoandev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>


        </AvatarGroup>

      </Box>
    </Box>
  )
}

export default BoardBar
