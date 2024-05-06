import React from "react";

function RecentFinancialItems({ lastAddedItems }) {
  return (
    <>
      <h2>Recent History</h2>
      <div>
        {lastAddedItems?.map((item, index) => (
          <p key={index}>
            {item.type}: {item.amount}
          </p>
        ))}
      </div>
    </>
  );
}

export default RecentFinancialItems;
