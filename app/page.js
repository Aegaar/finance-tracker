import Image from "next/image";
import { Database, BarChart } from "lucide-react";

export const metadata = {
  title: "Home",
  description: "See the possibilities of the finance tracker app",
};

export default function Home() {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6 px-8">
        <section className="mb-32 text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,1)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 lg:-mr-14">
                    <h2 className="mb-16 text-3xl font-bold">
                      Finance tracker <br />
                      <span className="text-blue-500">
                        Take care of your budget with ease
                      </span>
                    </h2>
                    <div className="grid gap-x-6 md:grid-cols-2">
                      <div className="mb-12">
                        <div className="flex  items-center">
                          <Database size={45} color="#3b82f6" />
                          <p className="text-center">
                            Store your incomes and expenses
                          </p>
                        </div>
                      </div>

                      <div className="mb-12">
                        <div className="flex items-center">
                          <BarChart size={45} color="#3b82f6" />
                          <p className="text-center">
                            See charts of your finances
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <Image
                    width={700}
                    height={500}
                    src="/Finance.jpg"
                    className="w-full rounded-lg shadow-l"
                    alt="finances"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
