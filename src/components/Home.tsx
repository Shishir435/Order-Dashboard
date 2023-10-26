import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/types/orderTypes";
import { EditBtn } from "./Editbtn";
import Pagination from "./Pagination";

const Home = () => {
  const [currentOrders, setCurrentOrders] = useState<Order[]>([]);
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
  function handleClick(id: string) {
    setIsEditModalOpen(true);
    setProdeuctId(id);
  }

  return (
    <div className="">
      <div className="sticky top-0 z-30">
        <Navbar />
        <Pagination setCurrentOrders={setCurrentOrders} />
      </div>

      {isEditModalOpen && (
        <EditBtn
          id={prodeuctId}
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      )}
      <Table className="max-w-7xl px-8 py-4 mb-2">
        <TableCaption>A list Orders.</TableCaption>
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
          {currentOrders.map(
            (
              { id, customer_name, customer_email, product, quantity }: Order,
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
  );
};
export default Home;
