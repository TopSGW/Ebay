import styles from "./Enavigation.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useSelector, useDispatch} from "react-redux";
import { findCategory ,findFinish} from "../../features/category/category";
import type { RootState } from "../../store";
import Esublist from "./Esublist";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function EmenusList(){
    const matches_ItemState = useMediaQuery('(min-width:980px)');
    const matches_phones = useMediaQuery('(max-width:979px)');

    const menu_info = useSelector((state:RootState) => state.menu);
    const subcategory_info = useSelector((state:RootState) =>state.category);
    const Itemstate = menu_info.is_Selected;
    const dispatch = useDispatch();
    const handleSearch = (payload:string) =>{
        dispatch(findCategory(payload))
    }
    return(
        <div className={`${styles.menusContainer}`}>
            <div className={`${styles.menuContainer} ${styles.L1_buy_and_sell}
                ${(matches_ItemState && Itemstate[0]) ? styles.menu_Container_isActive: ''}`} role="group"
                onMouseLeave={()=>dispatch(findFinish())}>
                <div className={(matches_ItemState && Itemstate[0])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Buy & Sell</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Buy &amp; Sell</a>
                        </li>
                        <li className={styles.categoryItem} role="none"onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                    Shop Holiday
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Arts &amp; Collectibles</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("Audio")}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Audio</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" 
                            onMouseOver={()=>{handleSearch("Baby Items")}}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Baby Items</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Bikes</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Books</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Business & Industrial</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Cameras & Camcorders</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>CDs, DVDs & Blu-ray</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Business & Industrial</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Clothing</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Computers</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Computer Accessories</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Electronics</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Free Stuff</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Furniture</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Garage Sales</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Health & Special Needs</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Hobbies & Crafts</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Home Appliances</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Home - Indoor</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Home - Outdoor & Garden</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Home Renovation Materials</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[0]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_cars_and_vehicles}
                ${(matches_ItemState && Itemstate[1]) ? styles.menu_Container_isActive: ''}`} role="group"
                onMouseLeave={()=>dispatch(findFinish())}>
                <div className={(matches_ItemState && Itemstate[1])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Cars & Vehicles</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Cars & Vehicles</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                Cars & Trucks on
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Cars & Trucks</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Classic Cars</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("Vehicle Parts, Tires, & Accessories")}
                            >
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Vehicle Parts, Tires, & Accessories</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("Automotive Services")}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Automotive Services</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Motorcycles</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>ATVs & Snowmobiles</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Boats & Watercraft</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>RVs, Campers & Trailers</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Heavy Equipment</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[1]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_real_estate}
                ${(matches_ItemState && Itemstate[2]) ? styles.menu_Container_isActive: ''}`} role="group"
                onMouseLeave={()=>dispatch(findFinish())}>
                <div className={(matches_ItemState && Itemstate[2])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Buy & Sell</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Real Estate</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("For Rent")}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                    For Rent
                                    <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("For Sale")}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>For Sale
                                </span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                        ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Real Estate Services</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[2]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_jobs}
                ${(matches_ItemState && Itemstate[3]) ? styles.menu_Container_isActive: ''}`} role="group"
                onMouseLeave={()=>{dispatch(findFinish())}}>
                <div className={(matches_ItemState && Itemstate[3])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Jobs</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Jobs</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                Accounting & Management
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Child Care</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Bar, Food & Hospitality</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Cleaning & Housekeeping</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Construction & Trades</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Customer Service</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Cannabis Sector</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Drivers & Security</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>General Labour</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Business & Industrial</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Graphic & Web Design</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Healthcare</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Hair Stylist & Salon</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Office Manager & Receptionist</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Part Time & Students</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Furniture</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Programmers & Computer</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Sales & Retail Sales</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>TV, Media, & Fashion</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[3]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_services}
                ${(matches_ItemState && Itemstate[4]) ? styles.menu_Container_isActive: ''}`} role="group"
                    onMouseLeave={()=>dispatch(findFinish())}>
                <div className={(matches_ItemState && Itemstate[4])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Services</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Services</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                Childcare & Nanny
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Cleaners & Cleaning</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Audio</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Entertainment</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Financial & Legal</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Fitness & Personal Trainer</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Food & Catering</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Health & Beauty</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Moving & Storage</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Music Lessons</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Photography & Video</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("Skilled Trades")}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Skilled Trades</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                        ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Tutors & Languages</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Wedding</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Travel & Vacations</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[4]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_pets}
                ${(matches_ItemState && Itemstate[5]) ? styles.menu_Container_isActive: ''}`} role="group"
                    onMouseLeave={()=>{dispatch(findFinish())}}>
                <div className={(matches_ItemState && Itemstate[5])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Pets</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Pets</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                Animal & Pet Services
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Birds for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Cats & Kittens for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Dogs & Puppies for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Equestrian & Livestock Accessories</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Fish for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Horses & Ponies for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Livestock</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Lost & Found</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Accessories</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Reptiles & Amphibians for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Small Animals for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other Pets for Rehoming</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Registered Shelter / Rescue</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[5]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_community} ${(matches_ItemState && Itemstate[6]) ? 
                    styles.menu_Container_isActive: ''}`} role="group" onMouseLeave={()=>dispatch(findFinish())}>
                <div className={(matches_ItemState && Itemstate[6])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Community</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Community</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.brandedLink}`} href="#"> 
                                Activities & Groups
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Artists & Musicians </span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Classes & Lessons</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Events</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Friendship & Networking</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Long Lost Relationships</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Lost & Found</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Missed Connections</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Rideshare</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Sports Teams</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Volunteers</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[6]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.L1_vacation_rentals}
                ${(matches_ItemState && Itemstate[7]) ? styles.menu_Container_isActive: ''}`} 
                    role="group" onMouseLeave={()=>dispatch(findFinish())}>
                <div className={(matches_ItemState && Itemstate[7])? `${styles.listContainer}`:`${styles.listContainer} ${styles.listContainer_isHidden}`}>
                    <h3 className={styles.categoryName}>Vacation Rentals</h3>
                    <ul className={styles.categoryList} role="menu">
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.link_title} ${styles.link_default} ${styles.seeAllLink}`} 
                                href="#">See all in Vacation Rentals</a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("Canada")}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Canada</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>handleSearch("USA")}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>USA</span>
                                <ArrowForwardIosIcon fontSize="small" className={`${styles.icon_arrow} 
                                    ${styles.moreCategoriesIcon}`}/>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Caribbean</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" onMouseOver={()=>dispatch(findFinish())}>
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Mexico</span>
                            </a>
                        </li>
                        <li className={styles.categoryItem} role="none" >
                            <a className={`${styles.menuLink} ${styles.button_en} ${styles.button_medium}`}>
                                <span className={styles.childName}>Other Countries</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuFlyout}>
                    {(subcategory_info.title != "init" && Itemstate[7]) && <Esublist {...subcategory_info}></Esublist>}
                </div>
            </div>
        </div>
    )
}