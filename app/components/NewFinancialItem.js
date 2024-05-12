"use client";

import React from "react";
import { createItemSchema } from "../utils/validationSchema";
import { useState } from "react";
import Message from "./Message";
import { mutate } from "swr";

function NewFinancialItem({ tableName, link, sources }) {
  const [error, setError] = useState({ message: undefined });
  const [open, setOpen] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newItem = {
      title: formData.get("title"),
      amount: parseFloat(formData.get("amount")),
      description: formData.get("description"),
      source: formData.get("source"),
      table: tableName,
    };

    const validation = createItemSchema.safeParse(newItem);

    if (!validation.success) {
      const errorMessage = validation.error.issues
        .map((issue) => issue.message)
        .join(", ");
      setError({ message: errorMessage });
      return;
    }

    if (validation.success) {
      setError({ message: undefined });
    }

    try {
      const response = await fetch("/api/finances", {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 5000);

      mutate(link);
    } catch (error) {
      setOpen(false);
      setError({ message: error.message || "Something went wrong" });
    }
  }
  return (
    <section className="bg-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <main className="px-8 py-8 sm:px-12 lg:px-0 lg:py-0 lg:w-full xl:px-0 xl:max-w-full text-center">
          <div className="max-w-xl lg:max-w-3xl mx-auto">
            <h1 className="mt-6 text-2xl font-bold text-blue-500 sm:text-3xl md:text-4xl">
              Add your {tableName}
            </h1>
            {open && <Message text={tableName} timeout={55000} link={link} />}
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
                  step="0.01"
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
                <label>{tableName} source</label>
                <fieldset className="flex flex-wrap justify-center gap-3">
                  <legend className="sr-only ">Source</legend>
                  {sources.map((source) => (
                    <div key={source.id}>
                      <label
                        htmlFor={source.id}
                        className="flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-gray-900 hover:text-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                      >
                        <input
                          type="radio"
                          name="source"
                          value={source.value}
                          id={source.id}
                          className="sr-only "
                        />
                        <p className="text-sm font-medium">{source.name}</p>
                      </label>
                    </div>
                  ))}
                </fieldset>
              </div>
              <div className="flex justify-center col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border w-full border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600   ">
                  Add
                </button>
              </div>
              {error.message && (
                <div className="flex justify-center col-span-6">
                  <p className="text-red-500">{error.message}</p>
                </div>
              )}
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default NewFinancialItem;
