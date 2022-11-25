import Image from "next/image"
import style from "./EpopularAutoHome.module.css"
import Img1 from "./img/1.jpeg";
import Img2 from "./img/2.jpg";
import Img3 from "./img/3.jpg";
import Img4 from "./img/4.jpeg";
import Img5 from "./img/5.jpg";
import Img6 from "./img/6.jpeg";
import Img7 from "./img/7.jpeg";
import Img8 from "./img/8.jpg";
export default function EpopularAutoHom(){
    return(
        <section className={style.moduleWrapper}>
            <div className={style.container}>
                 <h2 className={`${style.title} ${style.headerTitle}`}>
                    <span className={style.hiddenOnMobile}>Popular in </span>
                    Auto Category
                 </h2>
                 <a className={`${style.linkUrl} ${style.headerLink} ${style.button} ${style.button_small}`} href="#">
                    Browse all
                    <span className={style.hiddenOnMobile}> Autos in Category</span>
                 </a>
            </div>
            <div className={style.cardOuterContainer}>
                <div className={style.container_fn}>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img1} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img2} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    Cars & Trucks
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img3} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    Classic Cars
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img4} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    RV's, Campers & Trailers
                                </span>
                            </div>                            
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img5} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    Boats & Watercraft
                                </span>
                            </div>                            
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img6} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    Motorcycles
                                </span>
                            </div>                            
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img7} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    Vehicle Parts, Tires, & Accessories
                                </span>
                            </div>                            
                        </a>
                    </div>
                    <div className={style.cardContainer}>
                        <a href="#" className={`${style.link_default} ${style.container_en} ${style.container_fullBleed} ${style.container_visible}`}>
                            <div className={`${style.container_dn} ${style.image_fn}`}>
                                <picture>
                                    <Image src={Img8} alt="img1" className={style.image_gn}/>
                                </picture>
                            </div>
                            <div className={`${style.text_fullBleed}`}>
                                <span className={`${style.cardTitle} ${style.cardTitle_fullBleed}`}>
                                    Heavy Equipment
                                </span>
                            </div>                            
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}