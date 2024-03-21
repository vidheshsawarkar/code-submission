-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Submission_username_key" ON "Submission"("username");
