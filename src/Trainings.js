import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';

const Trainings = () => {

    const [trainings, setTrainings] = useState([]);
    useEffect(() => {

        fetch('http://traineeapp.azurewebsites.net/api/trainings')
            .then(res => res.json())
            .then(data => setTrainings(data.content))
    }, []);



    const columns = ['activity', 'date', 'duration',];


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
