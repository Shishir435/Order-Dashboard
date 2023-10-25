import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  useEffect,
  useState,
} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { buttonVariants } from "./ui/button";
import CreateBtn from "./CreateBtn";
import { RootState } from "@/lib/rootReducer";
import { useSelector } from "react-redux";
import { Order } from "@/types/orderTypes";
import { EditBtn } from "./Editbtn";

const ITEMS_PER_PAGE = 50;

const Home = () => {
  const orders: Order[] = useSelector((state: RootState) => state.orders);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = orders.slice(indexOfFirstItem, indexOfLastItem);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [prodeuctId, setProdeuctId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    (() => {
      if (
        !(localStorage.getItem("demoName") && localStorage.getItem("demoEmail"))
      ) {
        navigate("/login");
      }
    })();
  }, [location, navigate]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(id: string) {
    setIsEditModalOpen(true);
    setProdeuctId(id);
  }

  return (
    <div>
      <div>
        <Navbar />
        {/* Pagination */}
        <div className="">
          <div className="flex gap-5 px-5">
            <ul className="flex gap-4 overflow-x-auto p-2 items-center">
              {Array.from(
                { length: Math.ceil(orders.length / ITEMS_PER_PAGE) },
                (_, index) => (
                  <li
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`page-item cursor-pointer ${
                      currentPage === index + 1 ? "active bg-red-500" : ""
                    } ${buttonVariants({
                      variant: "outline",
                    })}`}
                  >
                    <span className="page-link">{index + 1}</span>
                  </li>
                )
              )}
            </ul>
            <div className="flex items-center">
              <CreateBtn />
            </div>
          </div>
        </div>
        {isEditModalOpen ? (
          <EditBtn
            id={prodeuctId}
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        ) : (
          ""
        )}
        <Table className="max-w-7xl px-8 py-4 ">
          <TableCaption>A list datas.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Index</TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map(
              (
                {
                  id,
                  customer_name,
                  customer_email,
                  product,
                  quantity,
                }: {
                  id: string;
                  customer_name: string;
                  customer_email: string;
                  product: string;
                  quantity: number;
                },
                index: number
              ) => (
                <TableRow
                  key={id}
                  className="cursor-pointer"
                  onClick={() => handleClick(id)}
                >
                  <TableCell className="font-medium text-center">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium">{customer_name}</TableCell>
                  <TableCell>{customer_email}</TableCell>
                  <TableCell>{product}</TableCell>
                  <TableCell className="text-center">{quantity}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default Home;
