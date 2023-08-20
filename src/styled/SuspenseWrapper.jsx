import React, {Suspense} from 'react'
import SuspenseLoader from './SuspenseLoader'

const SuspenseWrapper = ({children}) => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
        {children}
    </Suspense>
  )
}

export default SuspenseWrapper