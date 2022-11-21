import style from "./Easide.module.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function Easide(){
    return (
        <aside className={style.sidebar}>
            <a className={`${style.link_alternate} ${style.adChoices}`}>
                AdChoices
                <KeyboardDoubleArrowRightIcon className={style.icon}/>
            </a>
            <section className={`${style.moduleWrapper} ${style.popularLinks} `}>
                <div className={style.container}>
                    <h2 className={`${style.title} ${style.headerTitle}`}> Popular on OurShop </h2>
                </div>
                <a className={`${style.link_default} ${style.popularLink_en}`}>
                    Free Stuff
                    <ArrowRightIcon className={`${style.icon_en} ${style.chevron}`} 
                       color="primary" fontSize="large"/>
                </a>
                <a className={`${style.link_default} ${style.popularLink_en}`}>
                    Wanted Ads
                    <ArrowRightIcon className={`${style.icon_en} ${style.chevron}`} 
                       color="primary" fontSize="large"/>
                </a>
                <a className={`${style.link_default} ${style.popularLink_en}`}>
                    Swap/Trade
                    <ArrowRightIcon className={`${style.icon_en} ${style.chevron}`} 
                       color="primary" fontSize="large"/>
                </a>                                
            </section>
        </aside>
    )
}