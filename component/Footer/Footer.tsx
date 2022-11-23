import style from "./Footer.module.css"
import AppleIcon from '@mui/icons-material/Apple';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer()
{
    return(
        <div className={style.container}>
            <h2 className={style.srOnly}>Footer links</h2>
            <div className={style.linkContainer}>
                <div className={style.column}>
                    <h3 className={style.columnTitle}>
                        Kijiji
                    </h3>
                    <ul className={style.columnList}>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                About
                            </a>
                        </li>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Join Us
                            </a>
                        </li>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Member Benefits
                            </a>
                        </li>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Advertise on Kijiji
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.column}>
                    <h3 className={style.columnTitle}>
                            EXPLORE
                        </h3>
                        <ul className={style.columnList}>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Kijiji Autos
                                </a>
                            </li>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Kijiji Central
                                </a>
                            </li>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Tools to promte ads
                                </a>
                            </li>
                        </ul>
                </div>
                <div className={style.column}>
                    <h3 className={style.columnTitle}>
                        INFO
                    </h3>
                    <ul className={style.columnList}>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Terms of Use
                            </a>
                        </li>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Privacy Policy
                            </a>
                        </li>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Posting Policy
                            </a>
                        </li>
                        <li className={style.columnItem}>
                            <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                Adchoices
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.column}>
                    <h3 className={style.columnTitle}>
                            SUPPORT
                        </h3>
                        <ul className={style.columnList}>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Help Desk
                                </a>
                            </li>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Kijiji en frencais
                                </a>
                            </li>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Accessibility
                                </a>
                            </li>
                            <li className={style.columnItem}>
                                <a className={`${style.link_greyGreen} ${style.columnLink}`}>
                                    Change Contrast
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className={style.badgeContainer}>
                <div className={style.storeIcons}>
                    <a className={style.link_default}>
                        <div className={style.container_f}>
                            <AppleIcon className={`${style.icon} ${style.appStore}`}/>
                        </div>
                    </a>
                    <a className={style.link_default}>
                        <div className={style.container_f}>
                            <AddToDriveIcon className={`${style.icon} ${style.appStore}`}/>
                        </div>
                    </a>
                    <a className={style.link_default}>
                        <div className={style.container_f}>
                            <FacebookOutlinedIcon className={`${style.icon} ${style.appStore}`}/>
                        </div>
                    </a>
                    <a className={style.link_default}>
                        <div className={style.container_f}>
                            <InstagramIcon className={`${style.icon} ${style.appStore}`}/>
                        </div>
                    </a>
                    <a className={style.link_default}>
                        <div className={style.container_f}>
                            <TwitterIcon className={`${style.icon} ${style.appStore}`}/>
                        </div>
                    </a>
                    <a className={style.link_default}>
                        <div className={style.container_f}>
                            <YouTubeIcon className={`${style.icon} ${style.appStore}`}/>
                        </div>
                    </a>                       
                </div>
                <div className={style.socialMediaIcons}>
                    <div>
                        {/* <a className={`${style.link_default} ${style.socialMediaIconContainer}`}>
                            <FacebookOutlinedIcon className={`${style.icon} ${style.facebookIcon} ${style.face_book}`} 
                                fontSize="medium"/>
                        </a> */}
                    </div>

                </div>  
            </div>
            <div className={style.copyright}>
                <p className={style.copyrightText}>
                    All rights reserved. Google, Google Play, YouTube and other marks are trademarks of Google Inc.
                </p>
            </div>
        </div>
    )
}