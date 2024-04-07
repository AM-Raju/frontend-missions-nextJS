import { TResolver } from "@/types/index.types";
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
} & TResolver;

const PHForm = ({ formDataHandlerFn, children, resolver }: TPHFromProps) => {
  const formConfig: TResolver = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
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
