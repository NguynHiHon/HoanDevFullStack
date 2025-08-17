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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function BoardContent() {
  const COLUM_HEADER_HEIGHT='50px'
  const COLUM_FOOTER_HEIGHT='50px'
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.timeble.boardContentHeight,
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      p:'10px 0'

    }}>

      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'auto',
        '&::-webkit-scrollbar-track':{ m:2 }
      }}
      >
        {/* column 1 */}
        <Box
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
            height: COLUM_HEADER_HEIGHT,
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
          ${COLUM_HEADER_HEIGHT} - 
          ${COLUM_FOOTER_HEIGHT}
          )`
          }}>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>
              <CardMedia
                sx={{ height: 240 }}
                image='data:image/jpeg;base64,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'
                title="green iguana"
              />
              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >  Shigeo Tokuda  </Typography>

              </CardContent>
              <CardActions sx={{ p:'0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>0</Button>
              </CardActions>
            </Card>

            {/* card2 */}
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>


          </Box>

          {/* footer */}
          <Box sx={{
            height: COLUM_FOOTER_HEIGHT,
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

        {/* column 2 */}
        <Box
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
            height: COLUM_HEADER_HEIGHT,
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
          ${COLUM_HEADER_HEIGHT} - 
          ${COLUM_FOOTER_HEIGHT}
          )`
          }}>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>
              <CardMedia
                sx={{ height: 240 }}
                image='data:image/jpeg;base64,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'
                title="green iguana"
              />
              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >  Johnny Sins  </Typography>

              </CardContent>
              <CardActions sx={{ p:'0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>0</Button>
              </CardActions>
            </Card>

            {/* card2 */}
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow:'unset'
            }}>

              <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }} >
                <Typography >
          Hon Hai Dev Botuoi
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
          {/* footer */}
          <Box sx={{
            height: COLUM_FOOTER_HEIGHT,
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

      </Box>

    </Box>
  )
}

export default BoardContent
