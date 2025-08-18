import Box from '@mui/material/Box'
import Column from './Column/column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
function ListColumns() {
  return (
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
      <Column />
      <Column />
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        borderRadius: '6px',
        bgcolor: '#ffffff3d',
        mx: 2,
        height:'fit-content'
      }}>
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            width: '100%',
            color: 'white',
            justifyContent: 'flexstart',
            pl: 0.5,
            py: 1
          }}>
            Add Column </Button>
      </Box>
    </Box> )
}

export default ListColumns