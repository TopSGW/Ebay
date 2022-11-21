
import styles from "./Esublist.module.css";
import React from "react";
interface Props{
    title:string,
    subMenuinfo:string[]
}
export default function Esublist(props:Props){
    return(
        <div className={`${styles.listContainer} ${styles.listContainer_isSubMenu} ${styles.listContainer_twoOrMoreColumns}`}>
            <h3 className={`${styles.categoryName} ${styles.categoryName_isSubMenu}`}>{props.title}</h3>
            <ul className={`${styles.categoryList} ${styles.categoryList_isSubMenu}`} role="menu">
                {props.subMenuinfo.map((m,index:number) =>
                    <li className={`${styles.categoryItem} ${styles.categoryItem_isSubMenu}`} role="none" key={index}>
                        <a className={`${styles.menuLink} ${styles.menuLink_isSubMenu} ${styles.menuLink_twoOrMoreColumns}
                            ${styles.button_en} ${styles.button_medium}`} href="#">
                            <span className={styles.childName}>{m}</span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}