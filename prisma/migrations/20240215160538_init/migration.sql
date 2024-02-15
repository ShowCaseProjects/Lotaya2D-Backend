-- CreateTable
CREATE TABLE "approve_reject" (
    "approve_reject_type_id" INTEGER NOT NULL,
    "type" VARCHAR(100) NOT NULL,

    CONSTRAINT "approve_reject_pkey" PRIMARY KEY ("approve_reject_type_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "approve_reject_type_key" ON "approve_reject"("type");
