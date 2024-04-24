"use client";

import React from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createIncomeSchema } from "../../utils/validationSchema";
import { useState } from "react";
import { revalidatePath } from "next/cache";

function NewIncomePage() {
  const [invalidInput, setInvalidInput] = useState(false);
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newIncome = {
      title: formData.get("title"),
      amount: parseFloat(formData.get("amount")),
      description: formData.get("description"),
      source: formData.get("source"),
    };

    const validation = createIncomeSchema.safeParse(newIncome);

    if (!validation.success) {
      setInvalidInput(true);
      return;
    }

    if (!validation.success) {
      setInvalidInput(false);
    }

    await fetch("http://localhost:3000/api/income", {
      method: "POST",
      body: JSON.stringify(newIncome),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.refresh("/incomes");
  }

  return (
    <section className="bg-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <main className="px-8 py-8 sm:px-12 lg:px-0 lg:py-0 lg:w-full xl:px-0 xl:max-w-full text-center">
          <div className="max-w-xl lg:max-w-3xl mx-auto">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Add your income
            </h1>
            <form
              method="POST"
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={submitHandler}
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                  required
                >
                  Title
                </label>

                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                  required
                >
                  Amount
                </label>

                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white text-sm text-gray-700 shadow-sm  p-1"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                  required
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  className="mt-2 w-full rounded-lg align-top shadow-sm sm:text-sm border-2 border-gray-400 p-2"
                  rows={4}
                ></textarea>
              </div>

              <div className="col-span-6">
                <label>Income source</label>
                <fieldset className="flex flex-wrap justify-center gap-3">
                  <legend className="sr-only ">Source</legend>
                  <div>
                    <label
                      htmlFor="salary"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="source"
                        value="SALARY"
                        id="salary"
                        className="sr-only "
                      />

                      <p className="text-sm font-medium">Salary</p>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="freelancing"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="source"
                        value="FREELANCING"
                        id="freelancing"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Freelancing</p>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="investments"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="source"
                        value="Investments"
                        id="investments"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Investments</p>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="stocks"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="source"
                        value="STOCKS"
                        id="stocks"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Stocks</p>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="bank_transfers"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="source"
                        value="BANK_TRANSFERS"
                        id="bank_transfers"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Bank transfers</p>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="other"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="source"
                        value="OTHER"
                        id="other"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">other</p>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="flex justify-center col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border w-full border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Add
                </button>
              </div>
              {invalidInput && (
                  <p className="text-red-500">
                  Invalid input data
                </p>
              )}
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default NewIncomePage;
