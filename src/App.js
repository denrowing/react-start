import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"

import Cars from "./components/Cars";

export default function App() {
  return (
    <div>
    <Router>
      <Link to={'/'}>to home Page</Link>
      <Link to={'/cars'}>to Cars</Link>
      <Link to={'/cars'}>to Cars</Link>

      <Route path={'/cars'} component={Cars}/>
      <Route path={'/create-car'} component={Car}/>

    </Router>

    </div>
  );
}

// IP с дома 195.72.146.25
// IP в офисе 192.168.1.253
//
//
// Є наступні лінки, та дії закріплені за ними
// /cars - отримати всі автівки та вивести їх
// /create-car - сторінка з формою створення нового авто
// Додатково
// /update-car - сторінка з двома формами - 1 форма з select, в якій  можна обрати яку автівку редагувати. Після вибору
// поточні данні про авто з'являються на другій формі, пілся редагування яких і відправки автівка оновлюється на сервері.