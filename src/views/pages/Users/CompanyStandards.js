import React, { useEffect, useState } from 'react';
import { values } from 'lodash';
import MainCard from 'ui-component/cards/MainCard';
import { Grid, Table, Badge, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { Document, Page } from 'react-pdf';

const CompanyStandards = () => {
    const [docData, setDocData] = useState([]);

    useEffect(() => {
        // const token = localStorage.getItem("authToken");
        // console.log(token, "token");

        fetch('http://localhost:4000/select1/select1', {
            method: 'GET',
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/json'
                // Authorization: "Bearer " + token,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const arr = values(data.data);
                setDocData(arr);
                console.log(arr);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <MainCard title="CompanyStandards">
            <Grid item>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}>Order No</TableCell>
                            <TableCell colSpan={2}>Document</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {docData.map((item, index) => (
                            <TableRow key={index.toString()}>
                                <TableCell colSpan={2}>{`${item.orderNo}`}</TableCell>
                                <TableCell colSpan={2}>
                                    <Document file={`${item.document.data}`} options={{ workerSrc: '/item.document.data' }}>
                                        <Page>{`${item.document.data}`}</Page>
                                    </Document>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </MainCard>
    );
};

export default CompanyStandards;
