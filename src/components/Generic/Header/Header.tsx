import { ReactNode, FC } from 'react';
import './Header.scss';


interface Props {
    children: ReactNode
}

const Header: FC<Props> = ({ children }) => {

    return (

        <div className='header-main'>
            {children}
        </div>
    )

}

export default Header;