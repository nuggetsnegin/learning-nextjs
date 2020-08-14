import styles from './layout.module.css'

function Layout( { children }){
    //CSS Module is automatically generating a unique class name down here: 👀
    return <div className={styles.container}>{children}</div>
}

export default Layout