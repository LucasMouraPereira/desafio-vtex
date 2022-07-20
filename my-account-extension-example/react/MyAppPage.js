/* eslint-disable import/order */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import Cashback from './components/Cashback'

const MyAppPage = () => (
  <Fragment>
    <Route path="/cashback" component={Cashback} />
  </Fragment>
)

export default MyAppPage
