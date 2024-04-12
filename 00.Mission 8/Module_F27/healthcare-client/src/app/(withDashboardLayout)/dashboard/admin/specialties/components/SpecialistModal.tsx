"use client";
import PHModal from "@/components/shared/phModal/PHModal";
import { TextField } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";

type TSpecialistModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TSpecialistModalProps) => {
  return (
    <PHModal open={open} setOpen={setOpen} title={"Create Specialist"}>
      <TextField></TextField>
    </PHModal>
  );
};

export default SpecialistModal;
