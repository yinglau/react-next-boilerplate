import React from "react";
import configureStore from 'configureStore';
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import App from "next/app";

import Router from "next/router";
import Nprogress from 'nprogress'
import './styles/nprogress.less'

Router.onRouteChangeStart = url => {
    console.log('router change start')
    Nprogress.start();
}
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()
 

class MyApp extends App {
    
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const {Component, pageProps, store} = this.props
        
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}
export default withRedux(configureStore, {debug: process.env.NODE_ENV !== 'production'})(MyApp);
