import React from "react";

function NewIncomePage() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Add your income
            </h1>
            <form className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>

                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>

                <input
                  type="text"
                  id="amount"
                  name="amount"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                  rows={4}
                ></textarea>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <fieldset className="flex flex-wrap gap-3">
                  <legend className="sr-only">Color</legend>

                  <div>
                    <label
                      htmlFor="ColorBlack"
                      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorBlack"
                        id="ColorBlack"
                        className="sr-only"
                        checked
                      />

                      <p className="text-sm font-medium">Texas Tea</p>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="ColorRed"
                      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorRed"
                        id="ColorRed"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Fiesta Red</p>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="ColorBlue"
                      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorBlue"
                        id="ColorBlue"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Cobalt Blue</p>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="ColorGold"
                      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorGold"
                        id="ColorGold"
                        className="sr-only"
                      />

                      <p className="text-sm font-medium">Goldtop</p>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default NewIncomePage;
