import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import BackToTop from "react-back-to-top";
import Details from '../Details/Details'
import Displaymain from '../Displaymain/Displaymain'
import Navbar from '../Navbar/Navbar'
export const UserContext = React.createContext()


function Mainpage() {
  // const history = useHistory();
  // console.log(history)

  const [isDark, setisDark] = useState(false)
  function handleChange(newValue) {
    setisDark(newValue);
    console.log(isDark)
  }

  return (
    <div className={isDark ? "darkmode" : "mainpage"}>
      <Navbar toggle={isDark} handler={handleChange} />
      <Switch> 
        <Route exact path="/main" component={Displaymain} />
        <Route exact path="/details" component={Details} />
        <Redirect to="/" />
      </Switch>
      {/* <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>scroll up</span>
      </BackToTop> */}
      <div className="container mx-auto">
        <UserContext.Provider value={isDark}>
          <Displaymain />
        </UserContext.Provider>
      </div>
    </div>
  )
  
}

export default Mainpage
