import { Form, getHubID } from '@hubspot/cms-components';
import React, { useState, useEffect } from 'react';

interface TileProps {
    data: any;
    titleColor: string;
    titleFont: string;
    position: string;
    fontSize: string;
    submitOptions: string;
    buttonPosition: string;
}

const Tile = ({ data, titleColor, titleFont, position, fontSize, submitOptions, buttonPosition }: TileProps, context) => {
    const [activeForm, setActiveForm] = useState(0);

    const handleFormSwitch = (index: number) => {
        setActiveForm(index);
    };
    console.log('position', position);
    
    return (
        <div className=''>
            {data[activeForm]?.title && <h2 className={`${titleColor} ${titleFont} ${position} px-4 text-[28px] lg:${fontSize} font-bold`}>{data[activeForm]?.title}</h2>}
            {data[0].linkText && <p className='text-center mb-2 font-semibold mt-8'>Select Program Type</p>}
            <div className='flex justify-center items-center flex-wrap mb-4'>
                {data[0].linkText && data.map((linkItem: any, index: number) => (
                    <div key={index}>
                        <button
                            onClick={() => handleFormSwitch(index)}
                            className={`px-4 py-2 mb-4 mx-2 font-bold rounded-full ${activeForm === index ? 'bg-green-500 text-white' : 'bg-white text-brown-600'}`}
                        >
                            {linkItem.linkText}
                        </button>
                    </div>
                ))}
            </div>
            {data.map((linkItem: any, index: number) => (
                <Form
                    key={index}
                    fieldPath={`nav[${index}].form`}
                    className={`flex universal-form justify-center w-full ${submitOptions} ${buttonPosition} flex-grow ${activeForm !== index ? 'hidden' : ''}`}
                />
            ))}
            {/* <div id={`form-container-${data[activeForm]?.form?.form_id}`} className='mb-4 universal-form justify-center w-full flex-grow'></div> */}
        </div>
    );
};

export default Tile;