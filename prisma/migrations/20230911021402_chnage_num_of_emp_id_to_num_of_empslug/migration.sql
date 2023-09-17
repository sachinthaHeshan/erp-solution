/*
  Warnings:

  - You are about to drop the column `numOfEmpId` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_numOfEmpId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "numOfEmpId",
ADD COLUMN     "numOfEmpslug" TEXT;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_numOfEmpslug_fkey" FOREIGN KEY ("numOfEmpslug") REFERENCES "NumOfEmp"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
