import { FieldErrors, UseFormRegister } from "react-hook-form";

interface TextInputProps {
  name: string;
  register: UseFormRegister<any>;
  className?: string;
  errors?: FieldErrors<any>;
  label?: string;
}

export const TextInput = ({
  name,
  className,
  register,
  errors,
  label,
}: TextInputProps) => {
  const error: string | undefined =
    errors && name.split(".").reduce((acc: any, key) => acc?.[key], errors);

  return (
    <div className={className}>
      {label ? (
        <label className="block mb-2 text-sm font-medium ">{label}</label>
      ) : null}

      <input
        {...register(name)}
        type="text"
        id="error"
        className="border text-sm rounded-lg block w-full p-2.5 "
        placeholder="Error input"
      />
      {error ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500"></p>
      ) : (
        ""
      )}
    </div>
  );
};
