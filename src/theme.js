import { colors } from '@mui/material'
import { cyan, deepOrange, teal, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
const theme = extendTheme({
  timeble:{
    appBarHeight:'58px',
    boardBarHeight:'68px'
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px'
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: cyan[500],
          borderRadius: '8px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: teal[100],
          borderRadius: '8px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root:({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    }
  }
})
export default theme
