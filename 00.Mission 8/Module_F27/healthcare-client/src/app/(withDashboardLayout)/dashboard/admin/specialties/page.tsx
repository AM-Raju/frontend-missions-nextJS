"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialistModal from "./components/SpecialistModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialitiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  console.log("specialties page", data);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialist</Button>
        <SpecialistModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></SpecialistModal>
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
