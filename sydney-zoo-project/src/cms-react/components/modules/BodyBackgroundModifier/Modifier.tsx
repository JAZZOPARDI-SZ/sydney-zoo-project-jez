import React, { useEffect } from 'react';
import moment from 'moment'
import ReactPaginate from 'react-paginate';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ blogs, fieldValues }: any) => {

    useEffect(() => {
        var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = `url(${fieldValues.image.src})`;
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'bottom center';
        body.style.backgroundSize = 'cover';
    })

	return (
        <div>
        </div>
	);
};

export default Component;