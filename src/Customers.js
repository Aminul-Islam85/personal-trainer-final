import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';

const Customers = () => {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {

        fetch('https://traineeapp.azurewebsites.net/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data.content))
    }, []);



    const columns = ['firstname', 'lastname', 'streetaddress', 'postcode', 'city', 'email', 'phone'];

    const options = {
        responsive: 'standard',
        selectableRows: 'none',
        pagination: true,
        search: true,
        onRowDelete: (rowsDeleted) => {
            // Perform deletion
        },
    };

    return (
        <MUIDataTable
            title={'Customers'}
            data={customers}
            columns={columns}
            options={options}
        />
    );
};

export default Customers;
