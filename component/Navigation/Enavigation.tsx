import { useState, useEffect } from "react";
import styles from "./Enavigation.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useSelector, useDispatch} from "react-redux";
import { findCategory ,findFinish} from "../../features/category/category";
import type { RootState } from "../../store";
import { handle_Out, handle_Select } from "../../features/menu/menu";
import EmenusList from "./EmenusList";
import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import Emodal_menu from "./Emodal_menu";
import CloseIcon from '@mui/icons-material/Close';

export default function Enavigation(){
    const matches_ItemState = useMediaQuery('(min-width:980px)');
    const matches_phones = useMediaQuery('(max-width:979px)');
    const subcategory_info = useSelector((state:RootState) => state.category);
    const menu_info = useSelector((state:RootState)=>state.menu);
    const Itemstate = menu_info.is_Selected;
    const CurrentState = menu_info.currentState;
    const dispatch = useDispatch();
    const handleOut = () =>{
        if(matches_ItemState)dispatch(handle_Out());
    }
    const handleSelect =(id:number)=>{
        if(matches_ItemState){
            dispatch(handle_Select(id));
            dispatch(findFinish());    
        }
    }
    useEffect(()=>{
        if(matches_ItemState){
            handleClose();
        }
    },[matches_ItemState])
    const Is_Dialog=(id:number)=>{
        if(matches_phones)
        {
            dispatch(handle_Select(id));
            handleOpen();
        }
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(findFinish());
    }
    return(
        <nav className={`${styles.menu} ${styles.menu_noBottomPadding}`} onMouseLeave={()=> handleOut()}>
            <div className={(matches_ItemState && CurrentState) ?`${styles.menuWrapper} ${styles.menuWrapper_active}`:
                `${styles.menuWrapper}`} role="button">
                <ul className={styles.menuListL1} role="menubar">
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[0]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(0)} 
                            onClick={()=> Is_Dialog(0)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Buy & Sell</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[1]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(1)} onClick={()=> Is_Dialog(1)} role="none" >
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Cars & Vehicles</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[2]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(2)} onClick={()=> Is_Dialog(2)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Real Estate</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[3]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(3)} onClick={()=> Is_Dialog(3)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Jobs</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[4]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(4)} onClick={()=> Is_Dialog(4)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Services</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[5]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(5)} onClick={()=> Is_Dialog(5)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Pets</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[6]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(6)} onClick={()=> Is_Dialog(6)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Community</div>
                        </a>
                    </li>
                    <li className={`${styles.menuItemL1} ${styles.menuItemL1_en} 
                        ${(matches_ItemState && Itemstate[7]) ? styles.menuItemL1Active :''}`} 
                            onMouseOver={()=>handleSelect(7)} onClick={()=> Is_Dialog(7)} role="none">
                        <a className={styles.menuLinkL1} role="menuitem">
                            <div className={styles.nameL1}>Vacation Rentals</div>
                        </a>
                    </li>
                </ul>
                {matches_ItemState ? <EmenusList/> : 
                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} className={styles.modalOverlay}>
                            <div className={styles.modalScrollContainer}>
                                <div className={styles.focus}>
                                    <div className={styles.modalWindow} role="dialog">
                                        <div className={styles.modalHeader}>
                                            <button className={styles.closeButton} onClick={()=>handleClose()}>
                                                <CloseIcon sx={{height:12+"px",width:12+"px",display:'inline-block'}} className={`${styles.icon_modal} ${styles.closeIcon}`}
                                                    fontSize="large"/>
                                            </button>
                                        </div>
                                        <Emodal_menu/>
                                    </div>
                                </div>
                            </div>
                        </Box>    
                    </Modal>
                }
            </div>

        </nav>
    )
}
const style = {
    alignItems: 'center',
    bgcolor: 'rgba(51,51,51,.8)',
    left: 0,
    opacity: 1, 
    overflowX: 'inherit',
    overflowY: 'auto',
    position: 'fixed',
    top: 0,
    transition: 'opacity .2s linear',
    Zindex: 99999995,
    border: '2px solid #000',
    boxShadow: 24,  
    width: 100 + "%"
  };
