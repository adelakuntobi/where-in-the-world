import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import BackToTop from "react-back-to-top";
import Details from '../Details/Details'
import Displaymain from '../Displaymain/Displaymain'
import Navbar from '../Navbar/Navbar'
export const UserContext = React.createContext()



function Mainpage() {

  const [isDark, setisDark] = useState(false)
  function handleChange(newValue) {
    setisDark(newValue);
    // console.log(isDark)
  }

  return (
    <div className={isDark ? "darkmode" : "mainpage"}>
      <Navbar toggle={isDark} handler={handleChange} />
      <div className="container mx-auto">
        <Switch>
          <Route exact path="/" component={Displaymain} />
          <Route path="/country/:name" component={Details} />
          <Redirect to="/" />
        </Switch>
      </div>
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
          {/* <Displaymain /> */}
        </UserContext.Provider>
      </div>
    </div>
  )

}

export default Mainpage
