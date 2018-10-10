import React from 'react'
import { ReactComponent as SearchIcon } from './search-icon.svg'
import './App.scss'

import { Helmet } from 'react-helmet'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import SignUp from './SignUp'
import Home from './Home'
import Button from './Button'
import NotFound from './NotFound'

const Layout = () => (
  <main className="container">
    <Helmet>
      <title>Home - Our good friend</title>
    </Helmet>
    <header className="py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <p className="text-muted">Una organización para ti</p>
        </div>
        <div className="col-4 text-center">
          <Link className="text-dark" to="/">
            <h3>
              <span role="img" aria-label="logo">
                😄
              </span>{' '}
              Our good friend
            </h3>
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="text-muted" href="/">
            <SearchIcon />
          </a>
          <Button size="md" outline color="secondary" tag={Link} to="/sign-up">
            Registrate
          </Button>
          <Button size="md" outline color="secondary" tag={Link} to="/">
            Iniciar sesión
          </Button>
        </div>
      </div>
    </header>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sign-up" component={SignUp} />
      <Route component={NotFound} />
    </Switch>

    <footer>
      <p>© 2018 OurGoodFriend, Inc.</p>
    </footer>
  </main>
)

export default () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
