"use client";
import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useGetAllDoctorSchedulesQuery,
  useGetMyScheduleQuery,
} from "@/redux/api/doctorScheduleApi";
import { ISchedule } from "@/types/schedule/schedule.types";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IDoctorSchedule } from "@/types/doctor/doctorSchedule.types";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetMyScheduleQuery({});
  // console.log(data);

  const doctorSchedules = data;
  const meta = data?.meta;

  useEffect(() => {
    const updateData = doctorSchedules?.map(
      (doctorSchedule: IDoctorSchedule, index: number) => ({
        sl: index + 1,
        id: doctorSchedule?.doctorId,
        startDate: dateFormatter(doctorSchedule?.schedule?.startDate),
        startTime: dayjs(doctorSchedule?.schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(doctorSchedule?.schedule?.endDate).format("hh:mm a"),
      })
    );
    setAllSchedule(updateData);
  }, [doctorSchedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={allSchedule ?? []} columns={columns} />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulePage;
