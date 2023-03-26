import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';

const Customers = () => {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {

        fetch('https://traineeapp.azurewebsites.net/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data.content))
    }, []);



    const columns = [
        { name: 'firstname', label: 'First Name' }, { name: 'lastname', label: 'Last Name' },
        { name: 'streetaddress', label: 'Street Address' }, { name: 'postcode', label: 'Postcode' },
        { name: 'city', label: 'City' }, { name: 'email', label: 'Email' }, { name: 'phone', label: 'Phone' }
    ];

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
