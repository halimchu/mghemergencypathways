


const initialState = {
    buttonToggle: true,
    second: 0,
    minute: 0,
    icon: 'ios-play',
  
    buttonToggleCOVID: true,
    secondCovid: 0,
    minuteCovid: 0,
    iconCovid: 'ios-play'
    }
  
  
  // job of reducer is to return the new state based on the action it receives
  export default function timerReducer (state = initialState, action) {
      if (action.type === 'START_TIMER') {
        console.log('inside start timer reducer')
        console.log('state.second', state.second)
    
        if (state.minute === 9 && state.second === 59) {
          clearInterval(action.increment)
        }
  
        function increaseMinute () {
          if (state.second === 59) {
            return state.minute + 1  
          } else {
            return state.minute
          }
        }
  
        function increaseSecond() {
          if (state.second < 59) {
            return state.second + 1  
          } else {
            return state.second = 0
          }
        }
  
        return { 
          ...state,
          buttonToggle: action.buttonTrue,
          minute: increaseMinute(),
          icon: action.icon,
          second: increaseSecond(),
        } 
      }
    
  
      if (action.type==='RESET_TIMER') {
          clearInterval(action.increment)
          console.log('inside reset timer reducer')
          return { 
            buttonToggle: action.buttonFalse,
            second: 0,
            minute: 0,
            icon: action.icon,
          } 
       }
  
      return state
    }