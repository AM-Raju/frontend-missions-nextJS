import { ISchedule } from "../schedule/schedule.types";
import { IDoctor } from "./doctor.types";

export interface IDoctorSchedule {
  doctorId: string;
  scheduleId: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
  appointmentId: string | null;
  doctor: IDoctor;
  schedule: ISchedule;
}
