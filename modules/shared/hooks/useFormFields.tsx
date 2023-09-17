import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";
import { TextInput } from "../components/FormFields/TextInput";
import { ReactNode, useState } from "react";
import { OptionType, Select } from "../components/FormFields/Select";

interface FieldType {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  options?: OptionType[];
  colSpan?: "full" | "half";
  required?: boolean;
}

interface FormSectionType {
  key: string;
  title?: string;
  fields: FieldType[];
}

interface GetFormFieldsArgs {
  register: UseFormRegister<any>;
  control: Control<any, any>;
  trigger: UseFormTrigger<any>;
  errors?: FieldErrors<any>;
  steps: FormSectionType[][];
}

export const useFormFields = ({
  register,
  steps,
  errors,
  control,
  trigger,
}: GetFormFieldsArgs) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const validateFields = async (step: number) => {
    const fieldNames: string[] = [];
    steps?.[currentStepIndex]?.forEach((formSection) => {
      formSection.fields.forEach((field) => {
        fieldNames.push(field.name);
      });
    });

    const isValid = await trigger(fieldNames, { shouldFocus: true });
    return isValid;
  };

  const next = async () => {
    const isValid = await validateFields(currentStepIndex);

    if (isValid) {
      setCurrentStepIndex((i) => {
        if (i >= steps.length - 1) return i;
        return i + 1;
      });
    }
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  const isLastStep = currentStepIndex === steps.length - 1;
  const formFields = steps?.[currentStepIndex]?.map((formSection) => {
    return (
      <div key={formSection.key} className="grid grid-cols-2 gap-4">
        {formSection?.title ? (
          <h3 className="text-lg col-span-2 font-bold">{formSection.title}</h3>
        ) : null}
        {formSection.fields?.map((field) => {
          if (field.type === "text") {
            return (
              <TextInput
                key={field.name}
                name={field.name}
                label={field.label}
                register={register}
                errors={errors}
                required={field.required}
                className={`${
                  field.colSpan === "full" ? "col-span-2" : "col-span-1"
                }`}
              />
            );
          } else if (field.type === "select") {
            return (
              <Select
                key={field.name}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                options={field.options || []}
                errors={errors}
                control={control}
                required={field.required}
                className={`${
                  field.colSpan === "full" ? "col-span-2" : "col-span-1"
                }`}
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

  return { formFields, goTo, next, back, isLastStep };
};
