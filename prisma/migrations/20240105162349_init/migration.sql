-- CreateTable
CREATE TABLE "wallet" (
    "wallet_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_amount" DECIMAL(65,30),
    "main_amount" DECIMAL(65,30),
    "agent_id" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("wallet_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wallet_user_id_key" ON "wallet"("user_id");
