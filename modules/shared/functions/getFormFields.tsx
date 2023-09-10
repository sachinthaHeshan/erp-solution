import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TextInput } from "../components/FormFields/TextInput";
import { ReactNode } from "react";
import { OptionType, Select } from "../components/FormFields/Select";

interface FieldType {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  options?: OptionType[];
  colSpan?: "full" | "half";
}

interface FormSectionType {
  key: string;
  title?: string;
  fields: FieldType[];
}

interface GetFormFieldsArgs {
  register: UseFormRegister<any>;
  form: FormSectionType[];
  errors?: FieldErrors<any>;
}

export const getFormFields = ({
  register,
  form,
  errors,
}: GetFormFieldsArgs): ReactNode => {
  return form.map((formSection) => {
    return (
      <>
        {formSection?.title ? (
          <h3 className="pb-3 text-lg font-bold">{formSection.title}</h3>
        ) : null}
        <div key={formSection.key} className="grid grid-cols-2 gap-4">
          {formSection.fields?.map((field) => {
            if (field.type === "text") {
              return (
                <TextInput
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  register={register}
                  errors={errors}
                  className={`${
                    field.colSpan === "full" ? "col-span-2" : "col-span-1"
                  }`}
                />
              );
            } else if (field.type === "select") {
              return (
                <Select
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  options={field.options || []}
                  // errors={errors}
                  className={`${
                    field.colSpan === "full" ? "col-span-2" : "col-span-1"
                  }`}
                />
              );
            }
            return (
              <TextInput
                key={field.name}
                name={field.name}
                register={register}
              />
            );
          })}
        </div>
      </>
    );
  });
};
