import { useState } from "react";
import FoodCard from "../../../shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="my-8 px-4">
      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>

      {/******************************** Pagination ********************************/}
      <div className="flex space-x-2 mt-6 justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-sm rounded border border-slate-300 bg-transparent text-slate-600 disabled:opacity-50 disabled:pointer-events-none hover:bg-slate-100"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1.5 text-sm rounded ${
                isActive
                  ? "bg-slate-800 text-white border-transparent"
                  : "bg-transparent text-slate-600 border border-slate-300 hover:bg-slate-100 hover:text-slate-900"
              } transition`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-sm rounded border border-slate-300 bg-transparent text-slate-600 disabled:opacity-50 disabled:pointer-events-none hover:bg-slate-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
