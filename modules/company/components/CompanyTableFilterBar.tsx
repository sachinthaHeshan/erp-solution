import { Button } from "@/modules/shared/components/Button";
import { Drawer } from "@/modules/shared/components/Drawer/Drawer";
import { SearchField } from "@/modules/shared/components/FormFields/SearchField";
import { Select } from "@/modules/shared/components/FormFields/Select";
import { useState } from "react";
import { CreateCompanyForm } from "./CreateCompanyForm";
import { DrawerFooter } from "@/modules/shared/components/Drawer/DrawerFooter";
import { trpc } from "@/utils/trpc";

export const CompanyTableFilterBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createCompany = trpc.company.create.useMutation();

  return (
    <div className="flex justify-between pb-4">
      <div className="flex gap-4">
        <SearchField variant="light" />
        <Select
          placeholder="Relationship"
          options={[
            {
              label: "David Json",
              value: "david",
            },
            {
              label: "Candial Json",
              value: "davidss",
            },
            {
              label: "David Json",
              value: "davids",
            },
          ]}
        />
      </div>
      <Button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        ADD COMPANY
      </Button>

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        title="Add New Company"
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        footer={
          <DrawerFooter>
            <Button
              onClick={async () => {
                await createCompany.mutateAsync({
                  name: "Google",
                  website: "https://www.google.com/",
                });
              }}
            >
              {isLoading ? "Loading..." : "SAVE"}
            </Button>
          </DrawerFooter>
        }
        persist
      >
        <CreateCompanyForm />
      </Drawer>
    </div>
  );
};
