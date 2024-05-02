import PHModal from "@/components/shared/phModal/PHModal";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = React.useState(
    dayjs(new Date()).toISOString()
  );

  //   console.log(selectedDate);

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) =>
            setSelectedDate(dayjs(newValue).toISOString())
          }
        />
      </LocalizationProvider>
    </PHModal>
  );
};

export default DoctorScheduleModal;
