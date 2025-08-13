import Box from '@mui/material/Box'
function index() {
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width: '100%',
      height: (theme) => theme.timeble.boardContentHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
        Board Content
    </Box>
  )
}

export default index
