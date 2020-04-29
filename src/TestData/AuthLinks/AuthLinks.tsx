import { faUser,faSignOutAlt,faPlus} from '@fortawesome/free-solid-svg-icons';

export interface Links{
    linkName:string,
    image:any,
    name:string,
    onClick?:any
}

export const authLinks:Links[] = [
    {
        linkName:'#',
        image:faUser,
        name:'Profile'    
    },
    {
        linkName:'#',
        image:faPlus,
        name:'New Item'        
    },
    {
        linkName:'/',
        image:faSignOutAlt,
        name:'Logout'
    },
];


