import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloLogo } from '~/assets/mdi--trello.svg'
import { Typography } from '@mui/material'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.timeble.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
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
      </Box>
      <Box>
        <ModeSelect />
      </Box>

    </Box>
  )
}
export default AppBar
