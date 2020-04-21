import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';

interface Props{
    expand:boolean,
    count:number,
    setExpand:Function
}

const Sidebar:React.FC<Props> = ({expand,count,setExpand}) =>{
    const toggleSidebar = ()=>{
        let sidebarClass=''
        if(count<=0){
            sidebarClass='sidebar-content'
        }else{
           
            if(expand){
            sidebarClass= 'sidebar-animation-expand sidebar-content'
            }else{
            sidebarClass= 'sidebar-animation-collapse sidebar-content'
            }
        }
        return sidebarClass;
    }

    const toggleModal = ()=>{
        let modalClass='sidebar-modal'
           
            if(expand){
            modalClass= 'sidebar-modal sidebar-modal-display'
            }
       
        return modalClass;
    }

    const onClick = (e:any) =>{
        e.preventDefault();
        const className = e.target.getAttribute('class');
        if(className==='sidebar-modal sidebar-modal-display'){
            setExpand(false);
        }
    }
   
    
    return(
        <div onClick={onClick} className={toggleModal()}>
            <div className={toggleSidebar()}>
                <div className='sidebar-categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to='#'>Mobile Phones</Link></li>
                        <li><Link to='#'>Laptops</Link></li>
                        <li><Link to='#'>Furniture</Link></li>
                        <li><Link to='#'>Accessories</Link></li>
                    </ul>
                </div>
                <div className='sidebar-locations'>
                    <h3>Locations</h3>
                    <ul>
                        <li><Link to='#'>Lahore</Link></li>
                        <li><Link to='#'>Karachi</Link></li>
                        <li><Link to='#'>Islamabad</Link></li>
                        <li><Link to='#'>Quetta</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}


export default Sidebar;