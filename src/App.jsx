import Activity from './components/Activity'
import './App.css'
import { useState } from 'react'
import ActivityData from './data.json'

function App() {
  const  [timeframe, setTimeframe] = useState("daily")
  const [isSelected, setIsSelected] = useState({
    daily: true,
    weekly: false,
    monthly: false
  })

  function handleClick(e){
    let name = e.target.getAttribute('name')
    setTimeframe(name)
    setIsSelected({
      daily: false,
      weekly: false,
      monthly: false,
      [name]: true
    })
  }
  
  return (
    <> 
      <main>
        <div className='account-container'>
          <div className='profile-container'>
            <img src='/images/image-jeremy.png' className='avatar' alt='Avatar'></img>
            <div className='profile-descr'>
              <p>Report for</p>
              <h1 className='name'>Jeremy Robson</h1>
            </div>
            </div>
          <div className='timeframe-container'>
            <h3 name='daily' onClick={handleClick} className={isSelected.daily ? "selected" : ''}>Daily</h3>
            <h3 name='weekly' onClick={handleClick} className={isSelected.weekly ? "selected" : ''}>Weekly</h3>
            <h3 name='monthly' onClick={handleClick} className={isSelected.monthly ? "selected" : ''}>Monthly</h3>
          </div>
        </div>
        {ActivityData.map(activity => <Activity key={activity.title} {...activity} chosenTF={timeframe}/>)}
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
