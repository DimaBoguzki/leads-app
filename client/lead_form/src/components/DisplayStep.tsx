import { lazy, Suspense } from 'react'

const StartPage = lazy(() => import('../components/steps/StartPage'))
const UserInfo = lazy(() => import('../components/steps/UserInfo'))
const LookingFor = lazy(() => import('../components/steps/LookingFor'))

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
  }
]

const DisplayStep = ({index}: {index: number}) => {
  const step = configSteps?.[index]

  if(!step) return null

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <step.component />
    </Suspense>
  )
}

export {
  DisplayStep
}