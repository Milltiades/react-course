// import React, { Suspense, lazy, useState } from 'react'
// import Loading from './Loading'

// const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.jsx')))

// const LazyComponent = () => {
//     const [showPreview, setShowPreview] = useState(false)
//     const [markdown, setMarkdown] = useState('Hello, Gedeon!!')



    
//   return (
//     <>
//     <textarea value={markdown} onChange={e => setMarkdown(e.target.value)}/>
//     <label>
//         <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.value)} />
//         show preview
//     </label>
//     <hr/>
//     {showPreview && (
//         <Suspense fallback={<Loading/>}>
//             <h2>Preview</h2>
//             <MarkdownPreview markdown={markdown}/>
//         </Suspense>
//     )}
//     </>
//   )
// }

// export default LazyComponent

// function delayForDemo(promise) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000)
//     }).then(() => promise)
// }

import React, { Suspense, useState, lazy } from 'react';
import Loading from './Loading';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.jsx')).then(module => ({ default: module.default })));

export default function LazyComponent() {
    const [showPreview, setShowPreview] = useState(false);
    const [markdown, setMarkdown] = useState('Hello, Gedeon!!');

    return (
        <>
            <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
            <label>
                <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
                show preview
            </label>
            <hr />
            {showPreview && (
                <Suspense fallback={<Loading />}>
                    <h2>Preview</h2>
                    <MarkdownPreview markdown={markdown} />
                </Suspense>
            )}
        </>
    );
}

function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
