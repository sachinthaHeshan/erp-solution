import { Button } from "@/modules/shared/components/Button";
import { Drawer } from "@/modules/shared/components/Drawer/Drawer";
import { SearchField } from "@/modules/shared/components/FormFields/SearchField";
import { MutableRefObject, useRef, useState } from "react";
import { SubmitHandle, CreateCompanyForm } from "./CreateCompanyForm";
import { DrawerFooter } from "@/modules/shared/components/Drawer/DrawerFooter";

interface CompanyTableFilterBarProps {
  onSuccess: () => void;
}

export const CompanyTableFilterBar = ({
  onSuccess,
}: CompanyTableFilterBarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const formComponet = useRef<SubmitHandle>();

  return (
    <div className="flex justify-between pb-4">
      <div className="flex gap-4">
        <SearchField variant="light" />
        {/* <Select
          name="ss"
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
        /> */}
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
        persist
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        footer={
          <DrawerFooter>
            <Button
              onClick={async () => {
                setIsSubmiting(true);
                await formComponet?.current?.submit();
                setIsSubmiting(false);
              }}
            >
              {isSubmiting ? "Loading..." : "SAVE"}
            </Button>
          </DrawerFooter>
        }
      >
        <CreateCompanyForm
          ref={formComponet as MutableRefObject<SubmitHandle>}
          onSuccess={onSuccess}
        />
      </Drawer>
    </div>
  );
};
