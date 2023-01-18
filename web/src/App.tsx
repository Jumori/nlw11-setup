import './styles/global.css'

import { Habit } from './components/Habit'

function App(): JSX.Element {
  return (
    <>
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={6} />
      <Habit completed={8} />
      <Habit completed={10} />
    </>
  )
}

export default App
