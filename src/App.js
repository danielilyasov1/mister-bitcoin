import { HashRouter as Router, Route,Redirect, Switch } from 'react-router-dom'
// Redirect,
import './assets/scss/global.scss'
import HomePage from './pages/HomePage.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import ContactPage from './pages/ContactPage.jsx'
import StatisticPage from './pages/StatisticPage.jsx'
import { DetailsPage } from './pages/DetailsPage.jsx'
import { ContactEditPage } from './pages/ContactEditPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import React, { Component } from 'react'

const PrivateRoute = (props) => {
  const isLoggedInUser = true
  return isLoggedInUser ? <Route {...props} /> : <Redirect to="/signup" component={SignupPage} />
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-app">
          <AppHeader />
          <main className="container">
            <Switch>
              <Route path="/contact/edit/:id?" component={ContactEditPage} />
              <Route path="/contact/:id" component={DetailsPage} />
              <Route path="/statistics" component={StatisticPage} />
              <PrivateRoute path="/contact" component={ContactPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
          <footer>
            <section className="container">
              © Created by Danielle Ilyasov 14.8.2022
            </section>
          </footer>
        </div>
      </Router>
    )
  }
}

// function App() {

//   return (
//       <Router>
//           <div className="main-app">
//               <AppHeader />
//               <main className='container'>
//                   <Switch>
//                       <Route path='/contact/edit/:id?' component={ContactEditPage} />
//                       <Route path='/contact/:id' component={DetailsPage} />
//                       <Route path='/statistics' component={StatisticPage} />
//                       <Route path='/contact' component={ContactPage} />
//                       <Route path='/' component={HomePage} />
//                   </Switch>
//               </main>
//               <footer>
//                   <section className='container'>
//                       © Created by Danielle Ilyasov 14.8.2022
//                   </section>
//               </footer>
//           </div>
//       </Router>
//   );
// }

// export default App;
