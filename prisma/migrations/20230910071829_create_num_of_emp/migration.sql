/*
  Warnings:

  - Added the required column `industryId` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOfEmpId` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "industryId" TEXT NOT NULL,
ADD COLUMN     "numOfEmpId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "NumOfEmp" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NumOfEmp_pkey" PRIMARY KEY ("slug")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_numOfEmpId_fkey" FOREIGN KEY ("numOfEmpId") REFERENCES "NumOfEmp"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
