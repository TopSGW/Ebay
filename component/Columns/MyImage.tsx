import style from "./EcardSlider.module.css"
import Image from "next/image"
import img1 from "./1.jpeg"
import useMediaQuery from '@mui/material/useMediaQuery';
interface Props{
    img_src: string
}
export default function MyImage(props:Props){
    const matches_phones = useMediaQuery('(min-width:761px)');
    return(
        <div style={matches_phones ? {minWidth:'14.2857%'} : {}} className={`${style.cardContainer} ${style.galleryCardContainer}
            ${style.cardContainer_isCondensed}`}>
            <div className={style.containerWrapper}>
                <a className={`${style.link_default} ${style.container_fn}`} href="#">
                    <div className={`${style.container_sn} ${style.image}`}>

                        <Image src={props.img_src} fill       sizes="(max-width: 768px) 100vw,
                                                        (max-width: 1200px) 50vw,
              33vw" className={`${style.image_fn} ${style.imageTag}`} alt={""}/>
                    </div>
                    <div className={style.content}>
                        <h4 className={`${style.title} ${style.title_isCondensed} ${style.title_isHPGStyle}`}>
                            Rottweiler pups with German bloodlines
                        </h4>
                        <span className={`${style.price} ${style.price_isCondensed}`}> 18&nbsp;000,00 $</span>
                        
                    </div>
                </a>
            </div>
        </div>
    )
}