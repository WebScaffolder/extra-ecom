import React from 'react'
import Head from "next/head"
import { Toaster } from "react-hot-toast";
import GoTop from './GoTop'

const Layout = ({ children }) => {
    // console.log(user)
    return(
        <>
            <Head>
                <title>Luan - React Next Dynamic eCommerce Template</title>
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1, shrink-to-fit=no" 
                />
                <meta 
                    name="description" 
                    content="Luan - React Next Dynamic eCommerce Template" 
                />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="Luan - React Next Dynamic eCommerce Template"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="Luan - React Next Dynamic eCommerce Template"
                ></meta>
                <link rel="canonical" href="https://luan-react.hibotheme.com/"></link>
            </Head>
            
            {children}
 
            <Toaster 
                position="bottom-center" 
            />
  
            <GoTop />
        </>
    );
}

export default Layout;