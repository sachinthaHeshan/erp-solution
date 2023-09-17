import { FieldErrors, UseFormRegister } from "react-hook-form";

interface TextInputProps {
  name: string;
  register: UseFormRegister<any>;
  className?: string;
  errors?: FieldErrors<any>;
  label?: string;
  required?: boolean;
}

export const TextInput = ({
  name,
  className,
  register,
  errors,
  label,
  required,
}: TextInputProps) => {
  const error =
    errors && name.split(".").reduce((acc: any, key) => acc?.[key], errors);

  console.log(error);
  return (
    <div className={className}>
      {label ? (
        <label className="block mb-2 text-sm font-medium ">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      ) : null}

      <input
        {...register(name)}
        type="text"
        id="error"
        className="border text-sm rounded-lg block w-full h-12 px-3 "
        placeholder="Error input"
      />
      {error ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {error.message}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
