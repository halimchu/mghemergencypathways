const initialState = {
    CPR: 0,
    epi: 0,
    shock: 0,

    CPRCovid: 0,
    epiCovid: 0,
    shockCovid: 0
}

  export default function CPRshockEpiReducer (state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT_EPI':
        return {
          ...state,
          epi: state.epi + 1
        }
      case 'INCREMENT_SHOCK':
        return {
          ...state,
          shock: state.shock + 1
        }
      case 'INCREMENT_CPR':
        return {
          ...state,
          CPR: state.CPR + 1
        }


    // ======================Covid

      case 'INCREMENT_CPR_COVID':
        return {
          ...state,
          CPRCovid: state.CPRCovid + 1
        }
      case 'INCREMENT_EPI_COVID':
        return {
          ...state,
          epiCovid: state.epiCovid + 1
        }
      case 'INCREMENT_SHOCK_COVID':
        return {
          ...state,
          shockCovid: state.shockCovid + 1
        }
        
      default:
        return state
    }
  }