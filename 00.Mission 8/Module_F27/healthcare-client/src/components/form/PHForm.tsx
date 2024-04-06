import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TPHFromProps = {
  children: ReactNode;
  formDataHandlerFn: SubmitHandler<FieldValues>;
};

const PHForm = ({ formDataHandlerFn, children }: TPHFromProps) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleFormData: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    formDataHandlerFn(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormData)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
