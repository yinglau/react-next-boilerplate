import React from "react";
import configureStore from 'configureStore';
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";

import { IntlProvider, createIntl } from 'react-intl'
// import zh from 'translations/zh'
// import en from 'translations/en'

import App from "next/app";

import Router from "next/router";
import NProgress from 'nprogress'
import './styles/nprogress.less'

Router.onRouteChangeStart = url => {
    console.log('router change start')
    NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class MyApp extends App {
    
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const {Component, pageProps, store} = this.props
        
        return (
            <Provider store={store}>
                <IntlProvider
                    // locale={'zh'}
                    messages={require('translations/zh')}
                >
                    <Component {...pageProps} />
                </IntlProvider>
            </Provider>
        );
    }

}
export default withRedux(configureStore, {debug: process.env.NODE_ENV !== 'production'})(MyApp);
