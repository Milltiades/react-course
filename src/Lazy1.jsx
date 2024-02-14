import React, { Suspense,  useState } from 'react'
import Loading1 from './Loading1'
import { lazy } from 'react'



const ResultsPreview = lazy(() => delayFunc(import('./ResultsPreview')))

const Lazy1 = () => {

    const [name, setName] = useState('giga')
  return (
   <>
   <h1>click for results</h1>
{name && <Suspense fallback={<Loading1/>}>

    <ResultsPreview name={name}/>
</Suspense>}
   </>
  )
}

export default Lazy1



function delayFunc(promise) {
    return new Promise(res => {
        setTimeout(res, 3000)
    }).then(() => promise)
}