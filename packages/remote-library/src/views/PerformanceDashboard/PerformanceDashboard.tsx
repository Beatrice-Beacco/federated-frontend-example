import React, { useEffect, useState } from "react";
import { getCompanyData } from "../../services/companyDataService";
import { ICompany } from "./../../typescript/types/company-data-types";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  CompanyAreaChart,
  CompanyBarChart,
  CompanyComposedChart,
  CompanyLineChart,
} from "./../../components/graphs";

const PerformanceDashboard = () => {
  //Company data state
  const [companyData, setCompanyData] = useState<ICompany>();

  //Fetch company data
  useEffect(() => {
    getCompanyData(+process.env.COMPANY_ID!).then((data) =>
      setCompanyData(data)
    );
  }, []);

  if (!companyData) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" sx={{ my: "1rem" }} gutterBottom>
        {companyData.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "400px",
            }}
          >
            <Typography variant="h5" sx={{ my: "1rem" }} gutterBottom>
              Company Gains
            </Typography>
            <CompanyLineChart data={companyData.companyGains} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "400px",
            }}
          >
            <Typography variant="h5" sx={{ my: "1rem" }} gutterBottom>
              Company Spending
            </Typography>
            <CompanyComposedChart data={companyData.companySpending} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "400px",
            }}
          >
            <Typography variant="h5" sx={{ my: "1rem" }} gutterBottom>
              Clients Spending
            </Typography>
            <CompanyAreaChart data={companyData.clientsSpending} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "400px",
            }}
          >
            <Typography variant="h5" sx={{ my: "1rem" }} gutterBottom>
              Employees Performance
            </Typography>
            <CompanyBarChart data={companyData.employeesPerformance} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PerformanceDashboard;
