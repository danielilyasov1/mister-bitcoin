
import './assets/scss/global.scss'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import StatisticPage from './pages/StatisticPage.jsx'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <br/>
      {/* <ContactPage/> */}
      <br/>
      <StatisticPage/>
    </div>
  );
}

export default App;
