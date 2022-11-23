import styles from "./Eheader.module.css";
import Face2Icon from '@mui/icons-material/Face2';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PetsIcon from '@mui/icons-material/Pets';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { useState , useEffect } from "react";
import { style } from "@mui/system";

export default function Eheader () {
    const [cateState , SetcateState] = useState(false);
    const [categoryName , SetcategoryName] = useState('All Categories');
    const [SelectedIcon, SetSelectedIcon] = useState(<></>);
    const handleActive = () =>{
        SetcateState((cateState) => !cateState)
    }
    useEffect(() =>{
        SetSelectedIcon(()=> <GroupWorkIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>)
    } , [])
    const handleCategoryChange = (str:string) =>{
        SetcategoryName(str);
        switch(str){
            case 'All Categories':
                SetSelectedIcon(()=><GroupWorkIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case 'Pets':
                SetSelectedIcon(()=><PetsIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case 'Real Estate':
                SetSelectedIcon(()=> <HomeIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case "Vacation Rentals":
                SetSelectedIcon(()=><HouseboatOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case "Cars & Vehicles": 
                SetSelectedIcon(()=><DirectionsCarFilledIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case "Community":    
                SetSelectedIcon(() => <PeopleOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case "Jobs":
                SetSelectedIcon(() => <WorkIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;
            case "Services":
                SetSelectedIcon(()=> <SupportAgentOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}/>)
                break;                
        }
        SetcateState(false);
    }
    return(
        <div className={styles.headerContainer}>
            <div className={`${styles.headerWrapper} ${styles.headerWrapper_hasCategoryNavBar}`}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo} style={{visibility:'visible'}}>
                        <a className={styles.logoLink} href="">
                            <Face2Icon className={`${styles.icon} ${styles.logoLinkIcon}`}/>
                        </a>
                    </div>
                </div>
                <div className={styles.searchBarWrapper}>
                    <div className={`${styles.searchBar} ${styles.searchBar_homepage}`} role="search">
                        <div className={styles.wrapper}>
                            <div className={`${styles.wrapper_en} ${styles.formFieldKeyword}`}>
                                <div className={styles.field}>
                                    <div className={styles.inputContainer}>
                                        <span>
                                            <SearchIcon className={`${styles.icon} ${styles.icon_search} ${styles.inputIcon}`}/>
                                        </span>
                                        <input className={`${styles.input} ${styles.inputWithIcon} ${styles.inputKeyword1}`}
                                            placeholder="What are you looking for?"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.categoryContainer} ${styles.categoryContainer_on}`}>
                            <button className={`${styles.label} ${styles.label_on}`} onClick={()=> handleActive()}>
                                {/* <CategoryIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon} ${styles.dropdownSelectedIcon}`}
                                    /> */}
                                {SelectedIcon}
                                {categoryName}
                            </button>
                            {!cateState ?
                            <KeyboardArrowDownIcon className={`${styles.icon1} ${styles.icon2} ${styles.chevronIcon}`} 
                                /> :
                            <KeyboardArrowUpOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.chevronIcon}`} 
                                />
                            }
                            <div className={!cateState ? `${styles.categoryListWrapper}` : `${styles.categoryListWrapper} ${styles.Category_open}`}>
                                <ul className={styles.categoryList}>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Cars & Vehicles")}>
                                        <DirectionsCarFilledIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Cars & Vehicles</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Pets")}>
                                        <PetsIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Pets</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Services")}>
                                        <SupportAgentOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Services</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("All Categories")}>
                                        <GroupWorkIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>All Categories</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Jobs")}>
                                        <WorkIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Jobs</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Community")}>
                                        <PeopleOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Community</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Vacation Rentals")}>
                                        <HouseboatOutlinedIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Vacation Rentals</div>
                                    </li>
                                    <li className={styles.item} role="menuitem" onClick={()=>handleCategoryChange("Real Estate")}>
                                        <HomeIcon className={`${styles.icon1} ${styles.icon2} ${styles.itemIcon}`}/>
                                        <div className={styles.itemText}>Real Estate</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className={styles.locationModalTrigger}>
                            <div className={styles.iconWrapper}>
                                <LocationOnOutlinedIcon className={`${styles.icon3} ${styles.icon4}`}/>
                            </div>
                            <span className={styles.text}>Canada</span>
                        </button>
                        <button className={`${styles.searchSubmit} ${styles.button_sn} ${styles.button_futureSecondary} ${styles.button_medium}`}>
                            Search
                        </button>
                    </div>
                </div>
                <div className={styles.headerTool}>
                    <div className={styles.headerButtons}>
                        <a className={styles.headerLinkLanguage} href="">fr</a>
                        <div className={`${styles.root} ${styles.root_loggedOut}`}>
                            <div className={styles.root_en}>
                                <a className={`${styles.link_default} ${styles.register}`} href="#">Register</a>
                                <span className={styles.or}>
                                    &nbsp; or &nbsp;
                                </span>
                                <a className={styles.link_default} href=""> Sign In</a>
                            </div>
                        </div>
                        <a className={styles.headerButtonPostAd} href="">Post ad</a>
                    </div>
                </div>
            </div>
        </div>
    )
}