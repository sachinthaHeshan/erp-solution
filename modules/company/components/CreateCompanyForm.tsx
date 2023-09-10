import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getFormFields } from "@/modules/shared/functions/getFormFields";
import { forwardRef, useImperativeHandle } from "react";
import { trpc } from "@/utils/trpc";

const formSchema = z.object({
  name: z.string().min(1, "Username is required").max(100),
  website: z.string().min(1, "Website is required").max(100),
});

type ValidationSchema = z.infer<typeof formSchema>;

export type SubmitHandle = {
  submit: () => void;
};

interface CreateCompanyFormProps {
  s?: string;
}

export const CreateCompanyForm = forwardRef<
  SubmitHandle,
  CreateCompanyFormProps
>((props, ref) => {
  const createCompany = trpc.company.create.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema as any),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    await createCompany.mutateAsync({
      name: data.name,
      website: data.website,
    });
  };

  useImperativeHandle(ref, () => ({
    submit: async () => {
      await handleSubmit(onSubmit)();
    },
  }));

  return (
    <div>
      <form className="p-4">
        {getFormFields({
          errors,
          register,
          form: [
            {
              key: "company-details",
              title: "Company Details",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  colSpan: "full",
                },

                { label: "Website", name: "website", type: "text" },
                {
                  label: "Name",
                  name: "nasmsase",
                  type: "select",
                  options: [{ value: "hello", label: "Hello" }],
                },
              ],
            },
          ],
        })}
      </form>
    </div>
  );
});
