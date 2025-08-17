import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloLogo } from '~/assets/mdi--trello.svg'
import { TextField, Tooltip, Typography } from '@mui/material'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Template from './Menus/Template'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutline from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.timeble.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow:'auto',
      paddingX: 2
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon component={TrelloLogo} inheritViewBox fontSize="small" sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2 ', fontWeight: 'bold', color: 'primary.main' }}>HoanDev</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Started />
          <Template />
          <Button variant="outlined" startIcon={<LibraryAddIcon />}>Create</Button>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mr: 2
      }}>
        <TextField id='outlined-search' label='Search...' size='small' type='search'sx={{ minWidth:'120px' }}/>
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="primary" variant="dot" sx={{ cursor: 'pointer', color: 'primary.main' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Profile />
      </Box>

    </Box>
  )
}
export default AppBar
