import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { trpc } from "@/utils/trpc";
import useSWRImmutable from "swr/immutable";
import { useFormFields } from "@/modules/shared/hooks/useFormFields";
import { Button } from "@/modules/shared/components/Button";

const formSchema = z.object({
  name: z.string().min(1, "Username is required").max(100),
  website: z.string().min(1, "Website is required").max(100),
  numOfEmps: z.string().nullable(),
  industry: z.string().nullable(),
});

type ValidationSchema = z.infer<typeof formSchema>;

export type SubmitHandle = {
  submit: () => void;
};

interface CreateCompanyFormProps {
  onSuccess?: () => void;
}

export const CreateCompanyForm = forwardRef<
  SubmitHandle,
  CreateCompanyFormProps
>(({ onSuccess }, ref) => {
  const createCompany = trpc.company.create.useMutation();
  const utils = trpc.useContext();

  const { data, isLoading } = useSWRImmutable(
    "company.detailsForCreateForm.fetch",
    utils.company.detailsForCreateForm.fetch
  );

  const {
    register,
    handleSubmit,
    // reset,
    control,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      numOfEmps: "",
      industry: "",
    },
  });
  const { formFields, next, back, isLastStep } = useFormFields({
    errors,
    register,
    control,
    trigger,
    steps: [
      [
        {
          key: "company-details",
          title: "Company Details",
          fields: [
            {
              label: "Company Name",
              name: "name",
              type: "text",
              colSpan: "half",
              required: true,
            },
            {
              label: "Website",
              name: "website",
              type: "text",
              colSpan: "half",
              required: true,
            },
            {
              label: "Number of Employees",
              name: "numOfEmps",
              type: "select",
              colSpan: "half",
              options: data?.numOfEmps.map((option) => ({
                label: option.name,
                value: option.slug,
              })),
            },
            {
              label: "Industry",
              name: "industry",
              type: "select",
              colSpan: "half",
              options: data?.industries.map((option) => ({
                label: option.name,
                value: option.id,
              })),
            },
          ],
        },
      ],
      [
        {
          key: "contact-details",
          title: "Contact Details",
          fields: [
            {
              label: "Company Name",
              name: "name2",
              type: "text",
              colSpan: "half",
              required: true,
            },
            {
              label: "Website",
              name: "website2",
              type: "text",
              colSpan: "half",
              required: true,
            },

            {
              label: "Industry",
              name: "industry2",
              type: "select",
              colSpan: "half",
              options: data?.industries.map((option) => ({
                label: option.name,
                value: option.id,
              })),
            },
          ],
        },
      ],
    ],
  });
  useEffect(() => {
    console.log("Effect", data);
    // reset({
    //   name:
    // })
  }, [isLoading]);

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      await createCompany.mutateAsync({
        name: data.name,
        website: data.website,
        industryId: data.industry,
        numOfEmpslug: data.numOfEmps,
      });

      onSuccess && (await onSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  useImperativeHandle(ref, () => ({
    submit: async () => {
      if (isLastStep) {
        await handleSubmit(onSubmit)();
      } else next();
    },
  }));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form className="p-6">
      {formFields}

      <Button
        onClick={() => {
          next();
          trigger("name");
        }}
      >
        Next
      </Button>
      <Button onClick={back}>Back</Button>
    </form>
  );
});
