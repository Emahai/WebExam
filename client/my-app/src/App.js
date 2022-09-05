import React from 'react'
import Admin from './Components/Admin/admin.js'
import Employee from './Components/Employee/employee.js'
import SignIn from './Components/SignUp.js'

class App extends React.Component {
  render() {
  return (
    <div className='container'>
       <Admin />
      {/* <Employee /> */}
      {/* <SignIn /> */}
    </div>
  )
  }
}


export default App;