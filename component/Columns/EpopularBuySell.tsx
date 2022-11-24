import style from "./EpopularBuySell.module.css";
import style1 from "./EpopularAutoHome.module.css";
import Image from "next/image";
import Img1 from "./img/9.png";
import Img2 from "./img/10.jpg";
import Img3 from "./img/11.jpg";
import Img4 from "./img/12.jpg";
import Img5 from "./img/13.jpg";
import Img6 from "./img/14.jpg";
import Img7 from "./img/15.jpg";
import Img8 from "./img/16.jpg";
import Img9 from "./img/17.jpg";

export default function EpopularBuySell(){
    return(
        <>
            <section className={style1.moduleWrapper}>
                <div className={style1.container}>
                    <h2 className={`${style1.title} ${style1.headerTitle}`}>
                        <span className={style1.hiddenOnMobile}>Popular in </span>
                        Buy and Sell in Calgary
                    </h2>
                    <a className={`${style1.linkUrl} ${style1.headerLink} ${style1.button} ${style1.button_small}`} href="#">
                        Browse all
                        <span className={style1.hiddenOnMobile}> Buy and Sell in Calgary</span>
                    </a>
                </div>
                <div className={style.container}>
                    <div className={`${style.cardSliderContainer} minimumCards`}>
                        <div className={`${style.cardSlider} ${style.scrollLayout}`} style={{paddingRight:"40px",visibility:'visible'}}>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <Image src={Img1} alt="img1" className={style.image_fn}/>
                                    </div>
                                    <div className={style1.text_fullBleed}>
                                        <span className={`${style1.cardTitle} ${style1.cardTitle_fullBleed}`}>
                                            Shop Holiday
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <picture>
                                            <Image src={Img2} alt="img1" className={style.image_fn}/>
                                        </picture>
                                    </div>
                                    <div className={style1.text_fullBleed}>
                                        <span className={`${style1.cardTitle} ${style1.cardTitle_fullBleed}`}>
                                            Furniture
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <picture>
                                            <Image src={Img3} alt="img1" className={style.image_fn}/>
                                            </picture>
                                    </div>
                                    <div className={style1.text_fullBleed}>
                                        <span className={`${style1.cardTitle} ${style1.cardTitle_fullBleed}`}>                                  
                                            Home - Outdoor & Garden
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style1.moduleWrapper} ${style.signInMarketing}`}>
                <h2 className={style.signInMarketingHeading}>
                    Mainmarket’s better when you’re a member
                </h2>
                <p className={style.signInMarketingBody}>
                    See more relevant listings, find what you’re looking for quicker, and more!
                </p>
                <a className={`${style.link_default} ${style.signInMarketingButton}`} href="#">Sign In</a>
            </section>
            <section className={style1.moduleWrapper}>
                <div className={style1.container}>
                    <h2 className={`${style1.title} ${style1.headerTitle}`}>
                        <span className={style1.hiddenOnMobile}>Popular in </span>
                        Real Estate in Calgary
                    </h2>
                    <a className={`${style1.linkUrl} ${style1.headerLink} ${style1.button} ${style1.button_small}`} href="#">
                        Browse all
                        <span className={style1.hiddenOnMobile}> Real Estate in Calgary</span>
                    </a>
                </div>
                <div className={style.container}>
                    <div className={`${style.cardSliderContainer} minimumCards`}>
                        <div className={`${style.cardSlider} ${style.scrollLayout}`} style={{paddingRight:"40px",visibility:'visible'}}>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <Image src={Img4} alt="img1" className={style.image_fn}/>
                                    </div>
                                    <div className={style1.text_fullBleed}>
                                        <span className={`${style1.cardTitle} ${style1.cardTitle_fullBleed}`}>
                                            Apartments & Condos for Rent
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <picture>
                                            <Image src={Img5} alt="img1" className={style.image_fn}/>
                                        </picture>
                                    </div>
                                    <div className={style1.text_fullBleed}>
                                        <span className={`${style1.cardTitle} ${style1.cardTitle_fullBleed}`}>
                                            Houses for Rent
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <picture>
                                            <Image src={Img6} alt="img1" className={style.image_fn}/>
                                            </picture>
                                    </div>
                                    <div className={style1.text_fullBleed}>
                                        <span className={`${style1.cardTitle} ${style1.cardTitle_fullBleed}`}>                                  
                                            Houses for Sale
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style1.moduleWrapper}>
                <div className={style1.container}>
                    <h2 className={`${style1.title} ${style1.headerTitle}`}>
                        <span className={style1.hiddenOnMobile}>Mainmarket Central </span>
                    </h2>
                </div>
                <div className={style.container}>
                    <div className={`${style.cardSliderContainer} minimumCards`}>
                        <div className={`${style.cardSlider} ${style.scrollLayout}`} style={{paddingRight:"40px",visibility:'visible'}}>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <Image src={Img7} alt="img1" className={style.image_fn}/>
                                    </div>
                                </a>
                            </div>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <picture>
                                            <Image src={Img8} alt="img1" className={style.image_fn}/>
                                        </picture>
                                    </div>
                                </a>
                            </div>
                            <div className={style.cardContainer}>
                                <a href="#" className={`${style1.link_default} ${style1.container_en} ${style1.container_fullBleed} ${style1.container_visible}`}>
                                    <div className={`${style.container_dn} ${style.image}`}>
                                        <picture>
                                            <Image src={Img9} alt="img1" className={style.image_fn}/>
                                            </picture>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}