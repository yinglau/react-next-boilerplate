/**
 * SecondPage container
 * author: winson
 * email: 501285598@qq.com
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectSaga from '../../utils/injectSaga'
import injectReducer from '../../utils/injectReducer'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import Layout from 'containers/Layout'

import { defaultAction } from './actions'
import reducer from './reducer'
import saga from './saga'
import { getDefaultState } from './selectors'

export class SecondPage extends Component {
  render () {
    return (
      <Layout>
        <div>This is SecondPage!</div>
      </Layout>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  defaultState: getDefaultState()
})
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  defaultAction: (val) => dispatch(defaultAction(val))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'secondPage', reducer })
const withSaga = injectSaga({ key: 'secondPage', saga })

SecondPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default compose(withReducer, withSaga, withConnect)(SecondPage)
