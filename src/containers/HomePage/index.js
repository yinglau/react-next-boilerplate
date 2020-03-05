import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'

import { getNews } from './actions'
import saga from './saga'
import reducer from './reducer'
import { selectHomeNews } from './selectors'
import styles from './style.less'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import Layout from 'containers/Layout'

class HomePage extends Component {
  static async getInitialProps ({ isServer, store }) {
      store.execRunSagas(isServer, saga)
      await store.execSagaTasks(isServer, dispatch => {
        dispatch(getNews({
            tab: 'ask',
            limit: 6,
            page: 1
          }))
      })
    // you can do something with payload now
  }

  state = {
    tabid: 'ask'
  }

  renderListBox (res) {
    if (res && res.length) {
      return res.map(item => (
        <section key={item.id} className={styles.msgBox}>
          <span><img src={item.author.avatar_url} /></span>
          <article>
            <p><b>标题:</b> {item.title}</p>
            <p><b>发表日期:</b> {item.create_at}</p>
          </article>
        </section>
      ))
    } else {
      return null
    }
  }

  selectTab (tabid = 'ask') {
    const that = this
    this.setState({
      ...this.state,
      tabid
    }, () => {
      that.props.getNews({
        tab: that.state.tabid,
        limit: 6,
        page: 1
      })
    })
  }

  render () {
    const { data, isRequest } = this.props.homeNews.toJS();
    return (
      <Layout>
        <div style={{ padding: '10px 0' }}>
          <FormattedMessage {...messages.welcome} />
          <div className={styles.tabs}>
            <span className={this.state.tabid === 'ask' ? styles.actived : 'false'} data-tab="ask" onClick={() => this.selectTab('ask')}>ask</span>
            <span className={this.state.tabid === 'share' ? styles.actived : 'false'} data-tab="share" onClick={() => this.selectTab('share')}>share</span>
            <span className={this.state.tabid === 'job' ? styles.actived : 'false'} data-tab="job" onClick={() => this.selectTab('job')}>job</span>
            <span className={this.state.tabid === 'good' ? styles.actived : 'false'} data-tab="good" onClick={() => this.selectTab('good')}>good</span>
          </div>
          
          <div className={styles.test}>
            {data.data.length > 0 && (
              isRequest 
                ? (<div>loading....</div>) 
                : this.renderListBox(data.data)
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getNews: (val) => {
      return dispatch(getNews(val))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  homeNews: selectHomeNews()
})

const withSaga = injectSaga({ key: 'homePage', saga })
const withReducer = injectReducer({ key: 'homePage', reducer })
const withConnect = connect(mapStateToProps, mapDispatchToProps)

// containers propsTypes
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getNews: PropTypes.func,
  homeNews: PropTypes.object.isRequired
}

export default compose(withReducer, withSaga, withConnect)(HomePage)
