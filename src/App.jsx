import { useState } from 'react'
import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>HoanDEV bú tợn</div>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Count is {count}
      </Button>
    </>
  )
}

export default App
