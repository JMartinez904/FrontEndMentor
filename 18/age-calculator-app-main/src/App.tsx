import { useState } from 'react'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen min-w-screen bg-lightGrey flex justify-center flex-col items-center p-6 sm:p-0'>
      <Card></Card>
    </div>
  )
}

export default App
