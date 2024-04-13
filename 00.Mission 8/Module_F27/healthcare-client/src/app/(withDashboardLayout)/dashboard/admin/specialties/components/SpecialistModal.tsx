"use client";
import PHFileUploader from "@/components/form/PHFileUploader";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import PHModal from "@/components/shared/phModal/PHModal";
import { Button, Grid } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

type TSpecialistModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TSpecialistModalProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <PHModal open={open} setOpen={setOpen} title={"Create Specialist"}>
      <PHForm formDataHandlerFn={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          {/* File Uploader */}
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
