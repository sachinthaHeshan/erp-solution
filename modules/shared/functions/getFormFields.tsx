import { UseFormRegister } from "react-hook-form";
import { TextInput } from "../components/FormFields/TextInput";
import { ReactNode } from "react";
import { OptionType, Select } from "../components/FormFields/Select";

interface FieldType {
  name: string;
  type: string;
  placeholder?: string;
  options?: OptionType[];
}

interface FormSectionType {
  key: string;
  title?: string;
  fields: FieldType[];
}

interface GetFormFieldsArgs {
  register: UseFormRegister<any>;
  form: FormSectionType[];
}

export const getFormFields = ({
  register,
  form,
}: GetFormFieldsArgs): ReactNode => {
  return form.map((formSection) => {
    return (
      <div key={formSection.key}>
        {formSection?.title ? <h2>{formSection.title}</h2> : null}
        {formSection.fields?.map((field) => {
          if (field.type === "text") {
            return (
              <TextInput
                key={field.name}
                name={field.name}
                register={register}
              />
            );
          } else if (field.type === "select") {
            return (
              <Select
                key={field.name}
                placeholder={field.placeholder}
                options={field.options || []}
              />
            );
          }
          return (
            <TextInput key={field.name} name={field.name} register={register} />
          );
        })}
      </div>
    );
  });
};
