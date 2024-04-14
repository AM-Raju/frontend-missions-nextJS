import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const { useCreateDoctorMutation } = doctorApi;
