import React from 'react';
import { Island } from '@hubspot/cms-components';
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import OrderForm from './OrderForm?island';

export const Component = ({ fieldValues }: any) => {

    return (
        <Island
            module={OrderForm}
            fieldValues={fieldValues}
        />
    );
}

// Required
export { fields } from "./fields.tsx";

export const meta = {
  label: 'Ecommerce OrderForm',
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  isAvailableForNewContent: false,
};