import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/usersService";
import { User } from "../../typescript/types/users-types";
import DataTable from "../../components/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Container, Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 90,
  },
  {
    field: "jobTitle",
    headerName: "Job title",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
];

const Dashboard = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((userList) => setUsersList(userList));
  }, []);

  if (!usersList || usersList.length === 0) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ my: "1.2rem" }}>
          Users list
        </Typography>
        <DataTable rows={usersList} columns={columns} />
      </Container>
    </>
  );
};

export default Dashboard;
