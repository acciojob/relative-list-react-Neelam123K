import React from 'react'

const App = () => {
  const relatives = ['Uncle', 'Aunt', 'Cousin', 'Grandparents'];
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">{relatives.map((name, index) => (
                <li key={`relative-${index}`}>{name}</li>
               ))}</ol>
    </div>
  )
}

export default App
