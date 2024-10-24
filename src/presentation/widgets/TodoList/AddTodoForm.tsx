import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Validator from "../../../validator";

export type AddTodoFormProps = {
  onSubmit: SubmitHandler<Validator.AddTodoForm>;
};

export const AddTodoForm: React.FC<AddTodoFormProps> = (props) => {
  const { onSubmit } = props;
  const methods = useForm<Validator.AddTodoForm>({
    resolver: zodResolver(Validator.AddTodoForm),
    mode: "onSubmit",
    defaultValues: {
      title: "",
    },
  });

  const formProps: React.JSX.IntrinsicElements["form"] = {
    onSubmit: methods.handleSubmit(onSubmit),
  };

  const inputProps: React.JSX.IntrinsicElements["input"] = {
    ...methods.register("title"),
  };

  const submitButton: React.JSX.IntrinsicElements["button"] = {
    type: "submit",
    children: "Add Todo",
  };

  return (
    <form {...formProps}>
      <input {...inputProps} />
      <button {...submitButton} />
    </form>
  );
};

AddTodoForm.displayName = "AddTodoForm";

export default AddTodoForm;
