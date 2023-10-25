import {  Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "../lib/DummyData";
import { 
    // useEffect, 
    useState } from "react";
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
import { ActionBtn} from "./ActionBtn";
import { EditBtn } from "./Editbtn";
interface Product {
  id: string;
  customer_name: string;
  customer_email: string;
  product: string;
  quantity: number;
}
const ITEMS_PER_PAGE = 50;
// const productsJSON = JSON.stringify(Products);
// localStorage.setItem('DemoProducts', productsJSON);
// {id: 'omvsJQH0dhbsto9Z9o-ls', customer_name: 'Pedro Duarte', customer_email: 'test@test.com', product: 'Product1', quantity: 56}

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>(Products)
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

//   useEffect(()=>{
//     console.log(products.length)
//   },[products])
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

 
  return (
    <div>
      {localStorage.getItem("demoName") && localStorage.getItem("demoEmail") ? (
        <div>
          <Navbar />
          {/* Pagination */}
          <div className="">
            <div className="flex gap-5 px-5">
              <ul className="flex gap-4 overflow-x-auto">
                {Array.from(
                  { length: Math.ceil(products.length / ITEMS_PER_PAGE) },
                  (_, index) => (
                    <li
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`page-item cursor-pointer ${
                        currentPage === index + 1 ? "active" : ""
                      } ${buttonVariants({
                        variant: "outline",
                      })}`}
                    >
                      <span className="page-link">{index + 1}</span>
                    </li>
                  )
                )}
              </ul>
              <div>
               <ActionBtn setProducts={setProducts} ActionType="ADD"/>
              </div>
            </div>
          </div>
          {/* {isEditModalOpen &&<EditBtn products={products} setProducts={setProducts} ActionType="EDIT" id={productId}  setIsEditModalOpen={setIsEditModalOpen} />} */}
          
          <Table className="max-w-7xl px-8 py-4 ">
            <TableCaption>A list datas.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-center">Edit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map(
                ({ id, customer_name, customer_email, product, quantity }:{id: string,customer_name:string,customer_email:string, product: string, quantity: number}) => (
                  <TableRow key={id} className="cursor-pointer" >
                    <TableCell className="font-medium">
                      {customer_name}
                    </TableCell>
                    <TableCell>{customer_email}</TableCell>
                    <TableCell>{product}</TableCell>
                    <TableCell className="text-right">{quantity}</TableCell>
                    <TableCell className="text-center">
                        <EditBtn products={products} setProducts={setProducts} ActionType="EDIT" id={id}/>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Navigate to="/login" replace={true}/>
      )}
    </div>
  );
};

export default Home;
