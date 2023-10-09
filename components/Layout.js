import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Kirian Senaux</title>
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
           
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node,
}