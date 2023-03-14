import React from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  TextField,
  Box,
  Button,
} from "@mui/material";
import {
  ReportFormData,
  ReportType,
} from "../../typescript/types/report-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitReport } from "../../services/reportServices";
import { useModal } from "mui-modal-provider";
import InformationDialog from "../../components/InformationDialog";
import axios from "axios";

const reportOptions: Array<{ label: string; value: ReportType }> = [
  { label: "Bug", value: "bug" },
  { label: "Missing feature", value: "missing_feature" },
  { label: "Layout error", value: "layout_error" },
  { label: "Other", value: "other" },
];

const ReportForm = () => {
  const { showModal } = useModal();
  const formik = useFormik({
    initialValues: {
      type: "bug",
      title: "",
      description: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(255, "Il titolo non può superare i 255 caratteri")
        .required("Campo obbligatorio"),
      description: Yup.string()
        .max(1000, "La descrizione non può superare i 1000 caratteri")
        .required("Campo obbligatorio"),
    }),
    onSubmit: async (values: ReportFormData) => {
      try {
        await submitReport(values);
        formik.resetForm();

        alert("The report has been sent successfully. Thank you!");

        /* const dialog = showModal(InformationDialog, {
          message: "The report has been sent successfully. Thank you!",
          onConfirm: () => {
            formik.resetForm();
            dialog.destroy();
          },
        });
 */
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          alert(`An error occurred while sending the report: ${err.message}`);
          /*  const dialog = showModal(InformationDialog, {
            message: `An error occurred while sending the report: ${err.message}`,
            onConfirm(...args) {
              dialog.destroy();
            },
          }); */
        } else {
          console.error(err);
        }
      }
    },
  });

  return (
    <Container sx={{ mt: "2rem" }}>
      <Typography sx={{ my: "0.5rem" }} variant="h3">
        Report Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Select
            sx={{ my: "1rem" }}
            label="Tipologia"
            {...formik.getFieldProps("type")}
          >
            {reportOptions.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            sx={{ my: "1rem" }}
            label="Title"
            error={formik.touched.title && formik.errors.title ? true : false}
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title ? (
            <Typography
              variant="caption"
              display="block"
              color="error"
              gutterBottom
            >
              {formik.errors.title}
            </Typography>
          ) : null}
          <TextField
            sx={{ my: "1rem" }}
            label="Description"
            error={
              formik.touched.description && formik.errors.description
                ? true
                : false
            }
            multiline
            rows={6}
            {...formik.getFieldProps("description")}
          />
          {formik.touched.description && formik.errors.description ? (
            <Typography
              variant="caption"
              display="block"
              color="error"
              gutterBottom
            >
              {formik.errors.description}
            </Typography>
          ) : null}
          <Button
            sx={{ my: "1rem", alignSelf: "flex-start" }}
            variant="contained"
            disableElevation
            type="submit"
          >
            Submit report
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ReportForm;
