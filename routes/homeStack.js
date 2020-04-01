import { createStackNavigator } from 'react-navigation-stack'

import Home from '../src/components/Home'
import CardiacArrest from '../src/components/ACLS/CardiacArrest/CardiacArrest'
import Bradycardia from '../src/components/ACLS/Bradycardia/Bradycardia'
import Tachycardia from '../src/components/ACLS/Tachycardia/Tachycardia'
import PostCardiacArrestCare from '../src/components/ACLS/PostCardiacArrestCare/PostCardiacArrestCare'
import Pert from '../src/components/Pert/Pert'
import PertLabs from '../src/components/Pert/PertLabs'
import STEMI from '../src/components/STEMI/STEMI'
import STEMIUncertain from '../src/components/STEMI/STEMIUncertain'
import STEMIYes from '../src/components/STEMI/STEMIYes'
import Stroke1 from '../src/components/Stroke/Stroke1'
import Stroke2 from '../src/components/Stroke/Stroke2'
import Stroke3 from '../src/components/Stroke/Stroke3'
import RICU from '../src/components/RICU/RICU'
import RICUWhatToPrepare from '../src/components/RICU/RICUWhatToPrepare'
import RICUWhatToPresent from '../src/components/RICU/RICUWhatToPresent'

const HomeStack = createStackNavigator({
    Home: { screen: Home },
    CardiacArrest: { screen: CardiacArrest },
    Bradycardia: { screen: Bradycardia },
    Tachycardia: { screen: Tachycardia },
    PostCardiacArrestCare: { screen: PostCardiacArrestCare },
    Pert: { screen: Pert}, 
    PertLabs: { screen: PertLabs },
    STEMI: { screen: STEMI },
    STEMIUncertain: { screen: STEMIUncertain },
    STEMIYes: { screen: STEMIYes },
    Stroke1: { screen: Stroke1 },
    Stroke2: { screen: Stroke2 },
    Stroke3: { screen: Stroke3 },
    RICU: { screen: RICU },
    RICUWhatToPrepare: { screen: RICUWhatToPrepare },
    RICUWhatToPresent: { screen: RICUWhatToPresent },
  })
  
  export default HomeStack