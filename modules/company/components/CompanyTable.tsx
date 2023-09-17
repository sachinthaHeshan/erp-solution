import { ListTable } from "@/modules/shared/components/ListTable";
import { CompanyTableFilterBar } from "./CompanyTableFilterBar";
import { trpc } from "@/utils/trpc";

export const CompanyTable = () => {
  const companies = trpc.company.list.useQuery({ take: 100, skip: 0 });

  if (companies.isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CompanyTableFilterBar
        onSuccess={() => {
          companies.refetch();
        }}
      />
      <ListTable
        dataSource={
          companies.isSuccess
            ? companies.data.companies.map((company) => ({
                key: company.id,
                company: company.name,
                accountLead: company.website,
                relationship: "Company",
              }))
            : []
        }
      />
    </div>
  );
};
