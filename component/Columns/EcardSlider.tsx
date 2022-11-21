import style from "./EcardSlider.module.css"
import MyImage from "./MyImage";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from "react";
export default function EcardSlider()
{
    const [arrowState, SetarrowState] = useState(0);
    const arrowRight = () =>{
        SetarrowState(arrowState - 100);
    }
    const arrowLeft = () =>
    {
        SetarrowState(arrowState + 100);
    }
    return(
        <div className={style.container}>
            {arrowState < 0 ? 
            <div className={`${style.arrowLeftContainer}`} onClick= {arrowLeft}>
                <button className={style.arrowButton}></button>
                <NavigateBeforeIcon className={`${style.icon} ${style.arrowIcon}`} style={{height:"100%", width:"100%"}}/>
            </div> : ''}  
            <div className={style.cardSliderContainer}>
                <div className={`${style.cardSlider} ${style.cardSlider_isCondensed} ${style.galleryCardSlider}
                    ${style.carouselView}`} style={{visibility:'visible',transform:`translateX(${arrowState}%)`}}>
                    <div className={style.emptyCardPlaceholder}></div>
                    <MyImage img_src='/1.jpeg'/>
                    <MyImage img_src='/2.jpeg'/>
                    <MyImage img_src='/3.jpeg'/>
                    <MyImage img_src='/4.jpeg'/>
                    <MyImage img_src='/5.jpeg'/>
                    <MyImage img_src='/6.jpeg'/>
                    <MyImage img_src='/7.jpeg'/>
                    <MyImage img_src='/8.jpeg'/>
                    <MyImage img_src='/9.jpeg'/>
                    <MyImage img_src='/10.jpeg'/>
                    <MyImage img_src='/11.jpeg'/>
                    <MyImage img_src='/12.jpeg'/>
                    <MyImage img_src='/13.jpeg'/>
                    <MyImage img_src='/14.jpeg'/>
                    <MyImage img_src='/15.jpeg'/>
                    <MyImage img_src='/16.jpeg'/>
                    <MyImage img_src='/17.jpeg'/>
                    <MyImage img_src='/18.jpeg'/>
                    <MyImage img_src='/19.jpeg'/>
                    <MyImage img_src='/20.jpeg'/>
                    <MyImage img_src='/21.jpeg'/>
                    <MyImage img_src='/22.jpeg'/>
                    <MyImage img_src='/23.jpeg'/>
                    <MyImage img_src='/24.jpeg'/>
                    <MyImage img_src='/25.jpeg'/>
                    <MyImage img_src='/26.jpeg'/>
                    <MyImage img_src='/27.jpeg'/>
                </div>
            </div>
            {arrowState > -201 ?
            <div className={style.arrowRightContainer} onClick={arrowRight}>
                <button className={style.arrowButton}></button>
                <NavigateNextIcon className={`${style.icon} ${style.arrowIcon}`} style={{height:"100%", width:"100%"}}/>
            </div>
            : ''}  
        </div>
    )
} 