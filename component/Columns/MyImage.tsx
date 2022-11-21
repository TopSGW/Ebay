import style from "./EcardSlider.module.css"
import Image from "next/image"

interface Props{
    img_src: string
}
export default function MyImage(props:Props){

    return(
        <div style={{minWidth:'14.2857%'}} className={`${style.cardContainer} ${style.galleryCardContainer}
            ${style.cardContainer_isCondensed}`}>
            <div className={style.containerWrapper}>
                <a className={`${style.link_default} ${style.container_fn}`} href="#">
                    <div className={`${style.container_sn} ${style.image}`}>

                        <Image src={props.img_src} width={118} height={88} className={`${style.image_fn} ${style.imageTag}`} alt={""}/>
                    </div>
                    <div className={style.content}>
                        <h4 className={`${style.title} ${style.title_isCondensed} ${style.title_isHPGStyle} ${style.title_noPrice}`}>
                            KING-SIZE MOVING _From$60 _NO travel time within Calgary limits
                        </h4>
                    </div>
                </a>
            </div>
        </div>
    )
}