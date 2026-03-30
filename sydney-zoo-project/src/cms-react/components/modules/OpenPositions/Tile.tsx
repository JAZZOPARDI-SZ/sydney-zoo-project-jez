import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';


import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
}

const Tile = ({ data }: TileProps) => {
    const [htmlContent, setHtmlContent] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await fetch('https://sydneyzoo.bamboohr.com/jobs/embed2.php');
                const text = await response.text();
                setHtmlContent(text);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching careers data:', error);
                setLoading(false);
            }
        };

        fetchCareers();
    }, []);
    console.log('datas', htmlContent);

	return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Tile;