import Eheader from "./Header/Eheader"
import Enavigation from "./Navigation/Enavigation"
import EmoduleWrapper from "./ModuleWrapper/EmoduleWrapper"
import EColumns from "./Columns/EColumns"
import style from "./Maincontainer.module.css"
import Footer from "./Footer/Footer"
export default function Maincontainer (){
    return(
        <>
            <Eheader/>
            <Enavigation/>
            <div className={`${style.homepage} ${style.page}`}>
                <EmoduleWrapper/>
                <EColumns/>
            </div>
            <Footer/>
        </>
    )
}