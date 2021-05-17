import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom'
import Products from '../Products/Products';
import Categories from '../Categories/Categories';

import { PageHeader, Button } from 'antd'

const App = () =>  {

  return (
    <Router>
      <PageHeader className="header" title="Magasin" extra={[
        <Button key="3" type="link"><Link to={'/'}>Produits</Link></Button>,
        <Button key="2" type="link" ><Link to={'categories'}>Categories</Link></Button>,
      ]}/>
      <Switch>
        <Route exact path={'/'} component={Products} />
        <Route exact path={'/categories'} component={Categories} />
      </Switch>
    </Router>
)}



export default App;
