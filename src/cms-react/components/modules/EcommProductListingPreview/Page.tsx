import React, { useState } from 'react';

import Tickets from './Tickets';
import OrderForm from './OrderForm';

export const Component = ({ fieldValues }: any) => {
    const [selectedTickets, setSelectedTickets] = useState<any>([])

    return (
        <div>
            <OrderForm
                fieldValues={fieldValues}
                selectedTickets={selectedTickets}
                setSelectedTickets={setSelectedTickets}
            />
            <Tickets fieldValues={fieldValues}
                selectedTickets={selectedTickets}
                setSelectedTickets={setSelectedTickets}
            />
        </div>
    );
}

export default Component;