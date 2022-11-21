import { url } from "inspector";
import { urlToHttpOptions } from "url";
import style from "./EmoduleWrapper.module.css";
export default  function EmoduleWrapper()
{
    return(
        <section className={style.moduleWrapper}>
            <div className={style.contentContainer}>
                <div className={`${style.titleContainer} ${style.titleContainer_doubleTile}`}>
                    <h1 className={style.title}>
                        <span style={{color:'#37a864',fontWeight:'inherit'}}>'Tis the season! </span>
                        <span style={{color:"inherit",fontWeight:"inherit"}}>Shop gifts or sell your tires to get winter ready!</span>
                    </h1>
                </div>
                <div className={`${style.tilesContainer} ${style.tilesContainer_doubleTile}`}>
                    <a className={`${style.link_default} ${style.title_fn} ${style.browseHeroTile}
                        ${style.browseHeroTile_doubleTile}`}>
                        <div className={style.image} >
                            <div className={style.text}>
                                <span className={style.cardTitle}>Shop Holiday</span>
                            </div>
                        </div>
                    </a>
                    <a className={`${style.link_default} ${style.title_fn} ${style.browseHeroTile}
                        ${style.browseHeroTile_doubleTile}`}>
                        <div className={style.image}>
                            <div className={style.text}>
                                <span className={style.cardTitle}>Sell your tires</span>
                            </div>
                        </div>    
                    </a>
                </div>
            </div>
        </section>
    )
} 