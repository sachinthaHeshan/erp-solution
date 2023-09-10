import { TextInput } from "@/modules/shared/components/FormFields/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getFormFields } from "@/modules/shared/functions/getFormFields";

const formSchema = z.object({
  name: z.string().min(1, "Username is required").max(100),
});

type ValidationSchema = z.infer<typeof formSchema>;

export const CreateCompanyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema as any),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {getFormFields({
          register,
          form: [
            {
              key: "sss",
              title: "ss",
              fields: [
                { name: "name", type: "text" },

                { name: "nasme", type: "text" },
                {
                  name: "nasmsase",
                  type: "select",
                  options: [{ value: "hello", label: "Hello" }],
                },
              ],
            },
          ],
        })}
        <input type="submit" />
      </form>
    </div>
  );
};
