import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import UserTableItem from "./UserTableItem";

const UsersTable = () => {
    const users = useSelector(state => state.allUsers.users)
    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th>№</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                /*tableData.map((i, index) =>
                    <SimpleTableItem key={i.id} data={i} index={index}/>)*/
                users.map((i, index) =>
                    <UserTableItem key={i.id} data={i} index={index}/>)
            }
            </tbody>
        </Table>
    );
};

export default UsersTable;
