import Box from '@mui/material/Box'
function index() {
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.timeble.appBarHeight} - ${theme.timeble.boardBarHeight})`,    
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
        Board Content
    </Box>
  )
}

export default index
