//loading global CSS files: 'App' component is a top level component which will be common across different pages
//must be imported from pages/_app.js will not work anywhere else
import '../styles/global.css' //pages get access to global styles

export default function App({ Component, pageProps }){
    return <Component {...pageProps} />
}