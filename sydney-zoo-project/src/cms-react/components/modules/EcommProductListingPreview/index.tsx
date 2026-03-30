import React from 'react';
import { Island } from '@hubspot/cms-components';
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import Page from './Page?island';

export const Component = ({ fieldValues }: any) => {

    return (
        <Island
            module={Page}
            fieldValues={fieldValues}
        />
    );
}

// Required
export { fields } from "./fields.tsx";

export const meta = {
  label: 'Ecommerce OrderForm PREVIEW',
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  isAvailableForNewContent: false,
};