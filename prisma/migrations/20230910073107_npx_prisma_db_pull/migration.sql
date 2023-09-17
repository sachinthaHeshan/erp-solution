/*
  Warnings:

  - You are about to drop the column `industryId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `numOfEmpId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the `Industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NumOfEmp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_numOfEmpId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "industryId",
DROP COLUMN "numOfEmpId";

-- DropTable
DROP TABLE "Industry";

-- DropTable
DROP TABLE "NumOfEmp";
