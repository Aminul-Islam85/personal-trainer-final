import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import dayjs from 'dayjs';

const Trainings = () => {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const fetchTrainings = async () => {
            const res = await fetch('http://traineeapp.azurewebsites.net/api/trainings');
            const data = await res.json();
            const trainingsWithCustomer = await Promise.all(data.content.map(async (training) => {
                const customerRes = await fetch(training.links.find(link => link.rel === 'customer').href);
                const customerData = await customerRes.json();
                return {
                    ...training,
                    customer: customerData.firstname + ' ' + customerData.lastname
                };
            }));
            setTrainings(trainingsWithCustomer);
        };

        fetchTrainings();
    }, []);

    const formatDate = (date) => {
        return dayjs(date).format('DD.MM.YYYY HH:mm');
    };

    const columns = [
        { name: 'activity', label: 'Activity' },
        {
            name: 'date',
            label: 'Date',
            options: {
                customBodyRender: (value) => {
                    return formatDate(value);
                }
            }
        },
        { name: 'duration', label: 'Duration' },
        { name: 'customer', label: 'Customer' },
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
            title={'Trainings'}
            data={trainings}
            columns={columns}
            options={options}
        />
    );

};

export default Trainings;
