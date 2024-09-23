import React from 'react';
import './LinkFormGroup.scss';
import { Link } from 'react-router-dom';

interface Props {
    linkName: string,
    linkText: string
}

export const LinkFormGroup: React.FC<Props> = ({ linkName, linkText }) => {
    return (
        <div className='generic-link-form-group'>
            <Link to={linkName}>{linkText}</Link>
        </div>
    )
}
