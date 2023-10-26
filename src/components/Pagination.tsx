import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "@/features/order/paginationSlice";
import { RootState } from "@/app/store";
import { Order } from "@/types/orderTypes";
import { useEffect } from "react";
import { buttonVariants } from "./ui/button";
import CreateBtn from "./CreateBtn";

const ITEMS_PER_PAGE = 50;
const Pagination = ({
  setCurrentOrders,
}: {
  setCurrentOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}) => {
  const orders: Order[] = useSelector(
    (state: RootState) => state.orders.orders
  );
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const dispatch = useDispatch();
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  useEffect(() => {
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentOrders(currentOrders);
  }, [
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    orders,
    setCurrentOrders,
  ]);
  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className=" flex gap-5 px-5 bg-white">
      <ul className="flex gap-4 overflow-x-auto p-2 items-center">
        {Array.from(
          { length: Math.ceil(orders.length / ITEMS_PER_PAGE) },
          (_, index) => (
            <li
              key={index}
              onClick={() => paginate(index + 1)}
              className={`page-item cursor-pointer ${
                currentPage === index + 1 ? "active bg-red-700" : "bg-gray-50"
              } ${buttonVariants({
                variant: "outline",
              })}`}
            >
              <span className="">{index + 1}</span>
            </li>
          )
        )}
      </ul>
      <div className="flex items-center">
        <CreateBtn />
      </div>
    </div>
  );
};

export default Pagination;
