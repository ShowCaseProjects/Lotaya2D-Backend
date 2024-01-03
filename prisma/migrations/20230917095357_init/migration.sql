-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "phone_number" VARCHAR(13) NOT NULL,
    "user_name" VARCHAR(30),
    "password" TEXT,
    "otp_code" VARCHAR(6),
    "role_id" INTEGER NOT NULL,
    "sms_send_time" TIMESTAMP(3),
    "is_verify" VARCHAR(1) NOT NULL,
    "account_status" VARCHAR(1) NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "roles" (
    "role_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;
