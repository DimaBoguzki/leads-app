import { Box, LinearProgress, Stack, Typography } from '@mui/material'
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
  const valueBuffer = ( ( index - 1 ) * ( 100 / ( configSteps.length - 2 ) ) )
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <Stack flexGrow={ 1 } sx={ { overflowY: 'hidden', overflowX: 'hidden', height: '100vh' } }>
        <Box sx={ { width: '100%', display: ( index === 0 ) ? 'none' : 'block' } }>
          <LinearProgress
            color='primary'
            variant="buffer"
            value={ valueBuffer }
            valueBuffer={ 100 }
            sx={ { height: 8, mb: 2 } }
          />
        </Box>
        <Box
          sx={ {
            display: ( index === 0 || ( index === configSteps.length - 1 ) ) ? 'none' : 'block',
            position: 'fixed',
            right: '16px', top: '24px',
            zIndex: 999
          } }
        >
          <Typography
            variant="h5"
            sx={ {
              fontWeight: 600,
              color: '#fff'
            } }
          >
            { `שלב ${configSteps.length - 2}/${index}` }
          </Typography>
        </Box>
        <AnimatePresence mode="wait" >
          <motion.div
            key={ step.name }
            initial={ { opacity: 0, x: 20 } }
            animate={ { opacity: 1, x: 0 } }
            exit={ { opacity: 0, x: -20 } }
            transition={ { duration: 0.3 } }
            style={ { display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'hidden' } }
          >
            <Stack flexGrow={ 1 } sx={ { overflowY: 'hidden' } }>
              <step.component />
            </Stack>
          </motion.div>
        </AnimatePresence>
      </Stack>
    </Suspense>
  )
}

export {
  DisplayStep
}