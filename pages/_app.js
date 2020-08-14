//loading global CSS files: 'App' component is a top level component which will be common across different pages
export default function App({ Component, pageProps }){
    return <Component {...pageProps} />
}