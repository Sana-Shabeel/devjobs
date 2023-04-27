-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "logoBackground" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "postedAt" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "apply" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirementContent" TEXT NOT NULL,
    "requirementsItem" TEXT[],
    "roleContent" TEXT NOT NULL,
    "rolesItem" TEXT[],

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
