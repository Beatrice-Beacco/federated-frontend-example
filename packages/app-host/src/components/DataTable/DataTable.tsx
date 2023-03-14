import React from "react";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";

const DataTable = ({
  rows,
  columns,
}: {
  rows: GridValidRowModel[];
  columns: GridColDef[];
}) => {
  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataTable;
