import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogActions,
  Button,
} from "@mui/material";
import { useModal } from "mui-modal-provider";

interface ComponentProps extends DialogProps {
  title?: string;
  message: string;
  onConfirm: (...args: unknown[]) => void;
}

const InformationDialog = ({
  title,
  message,
  onConfirm,
  ...props
}: ComponentProps) => {
  return (
    <Dialog {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InformationDialog;
