import { Box, LinearProgress } from '@mui/material'
import { Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import StartPage from '../components/steps/StartPage'
import UserInfo from '../components/steps/UserInfo'
import LookingFor from '../components/steps/LookingFor'
import EndPage from '../components/steps/EndPage'



const configSteps = [
  {
    name: 'StartPage',
    component: StartPage
  },
  {
    name: 'UserInfo',
    component: UserInfo
  },
  {
    name: 'LookingFor',
    component: LookingFor
  },
  {
    name: 'EndPage',
    component: EndPage
  }
]

const DisplayStep = ( { index }: { index: number } ) => {
  const step = configSteps?.[ index ]

  if ( !step ) return null
  const valueBuffer = ( ( index ) * ( 100 / ( configSteps.length - 1 ) ) )
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <Box sx={ { width: '100%', position: 'sticky', top: 0 } }>
        <LinearProgress
          color='primary'
          variant="buffer"
          value={ valueBuffer }
          valueBuffer={ 100 }
          sx={ { height: 8, mb: 2 } }
        />
      </Box>
      <AnimatePresence mode="wait">
        <motion.div
          key={ step.name } // key helps AnimatePresence detect change
          initial={ { opacity: 0, x: 20 } }
          animate={ { opacity: 1, x: 0 } }
          exit={ { opacity: 0, x: -20 } }
          transition={ { duration: 0.3 } }
        >
          <Box >
            <step.component />
          </Box>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  )
}

export {
  DisplayStep
}