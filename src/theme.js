import { cyan, deepOrange, teal, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
const theme = extendTheme({
  timeble:{
    appBarHeight:'48px',
    boardBarHeight:'58px',
    boardContentHeight:'calc(100vh - appBarHeight - boardBarHeight)'
  },
  colorSchemes:{
    light:{
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
})

export default theme
