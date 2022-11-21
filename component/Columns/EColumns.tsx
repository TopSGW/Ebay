import style from "./EColumns.module.css";
import EcardSlider from "./EcardSlider";
import Easide from "./Easide";
import EpopularAutoHom from "./EpopularAutoHom";
import EpopularBuySell from "./EpopularBuySell";
export default function EColumns(){
    return(
        <div className={style.columns}>
            <main className={style.mainColumn}>
                <section className={style.moduleWrapper}>
                    <section className={style.galleryContainer}>
                        <div className={style.headingRow}>
                            <div className={style.headingTitleContainer}>
                                <h2 className={style.heading}>Homepage Gallery</h2>
                            </div>
                            <a className={`${style.link_default} ${style.seeAllLink}`} href="#">See All </a>
                            <a className={`${style.link_default} ${style.yourAdHereLink}`} href="#">
                                Your Ad here
                            </a>
                        </div>
                        <EcardSlider/>
                    </section>
                </section>
                <EpopularAutoHom/>
                <EpopularBuySell/>
            </main>
            <Easide/>
        </div>
    )
}