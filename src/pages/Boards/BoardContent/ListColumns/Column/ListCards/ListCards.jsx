import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Cards from './Card/Card'
function ListCards({ cards }) {

  return (
    <Box sx={{
      p: '0 5px',
      m:'0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap:1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
          ${theme.timeble.boardContentHeight} - 
          ${theme.spacing(5)} - 
          ${theme.timeble.columnHeaderHeight} - 
          ${theme.timeble.columnFooterHeight}
          )`
    }}>
      {
        cards?.map(card => (
          <Cards key={card._id} card={card} />
        ))
      }
    </Box>
  )
}

export default ListCards