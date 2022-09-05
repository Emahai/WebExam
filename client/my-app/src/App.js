// function App() {
//   return (
//     <div className="App">
//      <h1>hello</h1>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Admin from './Components/Admin/admin.js'
import employee from './Components/Employee/employee.js'

class App extends React.Component {
  render() {
  return (
    <div className='container'>
       <Admin />
    </div>
  )
  }
}


export default App;