"use client";

import Pagination from "../components/Pagination";
import useSWR from "swr";
import { CirclePlus } from "lucide-react";
import Loading from "../loading";
import Button from "./Button";
import Item from "./Item";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialItems({ page, tableName, link }) {
  const { data, error, isLoading } = useSWR(
    `api/finances?page=${page}&table=${tableName}`,
    fetcher
  );

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Failed to load data</div>;
  }

  const items = data?.items || [];
  const PAGINATION_NUMBER = 6;
  const count = data?.count || 0;
  const hasPrev = PAGINATION_NUMBER * (page - 1) > 0;
  const hasNext = PAGINATION_NUMBER * page < count;

  return (
    <>
      <div className="flex justify-center pt-10 pb-16 ">
        <Button
          href={`${link}/new`}
          description={`Add new ${tableName}`}
          icon={<CirclePlus />}
          style={"bg-blue-500 text-white rounded-2xl px-8 py-3"}
        />
      </div>
      {items.length <= 0 ? (
        <div className="text-center text-2xl">No {tableName} at present</div>
      ) : (
        <div>
          {items.length <= 2 ? (
            <div className={`grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-10`}>
              {items.map((item) => (
                <Item
                  item={item}
                  link={link}
                  tableName={tableName}
                  key={item.id}
                />
              ))}
            </div>
          ) : (
            <div className={`grid lg:grid-cols-3 md:grid-cols-1 gap-6 px-10`}>
              {items.map((item) => (
                <Item
                  item={item}
                  link={link}
                  tableName={tableName}
                  key={item.id}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {(hasNext || hasPrev) && (
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      )}
    </>
  );
}

export default FinancialItems;
