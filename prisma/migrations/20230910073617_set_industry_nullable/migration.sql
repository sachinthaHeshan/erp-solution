-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_numOfEmpId_fkey";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "industryId" DROP NOT NULL,
ALTER COLUMN "numOfEmpId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_numOfEmpId_fkey" FOREIGN KEY ("numOfEmpId") REFERENCES "NumOfEmp"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
