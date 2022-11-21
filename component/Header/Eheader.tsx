import styles from "./Eheader.module.css";
import Face2Icon from '@mui/icons-material/Face2';
export default function Eheader () {
    return(
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo} style={{visibility:'visible'}}>
                        <a className={styles.logoLink} href="">
                            <Face2Icon className={`${styles.icon} ${styles.logoLinkIcon}`}/>
                        </a>
                    </div>
                </div>
                <div className={styles.searchBarWrapper}>
                    <form className={`${styles.searchBar} ${styles.searchBar_on} ${styles.searchBar_homepage}`}>
                        <div className={styles.wrapper}>
                            <div className={`${styles.wrapper_en} ${styles.formFieldKeyword}`}>
                                
                            </div>
                        </div>
                        <div className={`${styles.categoryContainer} ${styles.categoryContainer_on}`}><h1>All Category</h1></div>
                        <button className={styles.locationModalTrigger}>
                            <div className={styles.iconWrapper}><span>Icon</span></div>
                            <span className={styles.textSearch}>Canada</span>
                        </button>
                        <button className={`${styles.searchSubmit} ${styles.searchSubmit_on}`}>
                            Search
                        </button>
                    </form>
                </div>
                <div className={styles.headerTool}>
                    <h1>xxxxxxxxxxxxxx</h1>
                </div>
            </div>
        </div>
    )
}