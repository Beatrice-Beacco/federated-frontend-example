import React, { useEffect, useState } from "react";
import { getCompanyData } from "remote_library/companyDataService";
import { CompanyComposedChart, CompanyBarChart } from "remote_library/graphs";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ICompany } from "remote_library/_types/typescript/types/company-data-types";

const CompanyPerformance = () => {
  const [companyData, setCompanyData] = useState<ICompany>();

  useEffect(() => {
    getCompanyData(+process.env.COMPANY_ID!).then((data: ICompany) =>
      setCompanyData(data)
    );
  }, []);

  if (!companyData) return <div>Loading...</div>;

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ my: "1rem" }} gutterBottom>
        Company Data
      </Typography>
      <Typography variant="h6" sx={{ my: "1rem" }} gutterBottom>
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
            <CompanyComposedChart data={companyData.companyGains} />
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
            <CompanyBarChart data={companyData.employeesPerformance} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyPerformance;
