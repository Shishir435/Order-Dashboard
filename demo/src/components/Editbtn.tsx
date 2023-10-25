// {isEditModalOpen?<ActionBtn setProducts={setProducts} ActionType="EDIT" id={id} customer_name={customer_name} customer_email={customer_email} product={product} quantity={quantity}/>:}
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormEvent,
  useState,
} from "react";
interface Product {
  id: string;
  customer_name: string;
  customer_email: string;
  product: string;
  quantity: number;
}
export function EditBtn({
  products,
  setProducts,
//   ActionType,
  id,
  isEditModalOpen,
  setIsEditModalOpen,
}: //   setIsEditModalOpen,
{
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
//   ActionType: "ADD" | "EDIT";
  id: string;
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  //   setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [name, setName] = useState(
    products.find((item) => item.id === id)
      ? products.find((item) => item.id === id)!.customer_name
      : "demo name"
  );
  const [email, setEmail] = useState(
    products.find((item) => item.id === id)
      ? products.find((item) => item.id === id)!.customer_email
      : "demo@email.com"
  );
  const [prod, setProd] = useState(
    products.find((item) => item.id === id)
      ? products.find((item) => item.id === id)!.product
      : "Product1"
  );

  const [quant, setQuant] = useState<number>(
    products.find((item) => item.id === id)
      ? products.find((item) => item.id === id)!.quantity
      : 1
  );

    
    
      
  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    // console.log("form submitted");
    const updatedProduct: Product = {
      id: id,
      customer_name: name,
      customer_email: email,
      product: prod,
      quantity: Number(quant),
    };
    const productIndex = products.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      // Create a new array with the updated product
      const updatedProducts = [...products];
      updatedProducts[productIndex] = updatedProduct;
      // Update the state with the new array of products
      setProducts(updatedProducts);
    }
 
    // setIsEditModalOpen(false);
    setIsEditModalOpen(false)

  };

  function handleDelete(id: string){
    
    const confirmed= window.confirm("are you sure you want to delete")
    if(confirmed){
      const updatedProducts=products.filter((item)=> item.id !== id)
      setProducts(updatedProducts)
      setIsEditModalOpen(false)
    }

  }

  if (isEditModalOpen) {
    return (
      <div  className="w-full  fixed z-50 flex justify-center -mt-20">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Edit</CardTitle>
            <CardDescription>Edit You Product</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={name}
                  className="col-span-3"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={email}
                  className="col-span-3"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Product</Label>
                <Select
                  onValueChange={(value) => {
                    console.log(value);
                    setProd(value);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Products</SelectLabel>
                      <SelectItem value="Product1">Product1</SelectItem>
                      <SelectItem value="Product2">Product2</SelectItem>
                      <SelectItem value="Product3">Product3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  defaultValue={quant.toString()}
                  className="col-span-3"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = parseInt(e.target.value, 10);
                    setQuant(isNaN(newValue) ? 0 : newValue);
                  }}
                />
              </div>
              <Button type="submit">Edit</Button>
              <Button type="submit" className="bg-red-600" onClick={()=>handleDelete(id)}>Delete</Button>
              <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      // <Dialog >
      //   {/* <DialogTrigger asChild>
      //     <Button variant="outline">
      //       {ActionType === "EDIT" ? "Edit" : "Add"} Product
      //     </Button>
      //   </DialogTrigger> */}
      //   <DialogContent className="sm:max-w-[425px]">
      //     <DialogHeader>
      //       <DialogTitle>{ActionType}</DialogTitle>
      //       <DialogDescription>
      //         {ActionType === "EDIT" ? " Make changes to" : "Add"} your Product
      //         here. Click save when you're done.
      //       </DialogDescription>
      //     </DialogHeader>
      //     <form onSubmit={handleSave} className="grid gap-4 py-4">
      //       <div className="grid grid-cols-4 items-center gap-4">
      //         <Label htmlFor="name" className="text-right">
      //           Name
      //         </Label>
      //         <Input
      //           id="name"
      //           defaultValue={name}
      //           className="col-span-3"
      //           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      //             setName(e.target.value)
      //           }
      //           required
      //         />
      //       </div>
      //       <div className="grid grid-cols-4 items-center gap-4">
      //         <Label htmlFor="email" className="text-right">
      //           Email
      //         </Label>
      //         <Input
      //           id="email"
      //           type="email"
      //           defaultValue={email}
      //           className="col-span-3"
      //           required
      //           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      //             setEmail(e.target.value)
      //           }
      //         />
      //       </div>
      //       <div className="grid grid-cols-4 items-center gap-4">
      //         <Label className="text-right">Product</Label>
      //         <Select
      //           onValueChange={(value) => {
      //             console.log(value);
      //             setProd(value);
      //           }}
      //         >
      //           <SelectTrigger className="w-[180px]">
      //             <SelectValue placeholder="Select Product" />
      //           </SelectTrigger>
      //           <SelectContent>
      //             <SelectGroup>
      //               <SelectLabel>Products</SelectLabel>
      //               <SelectItem value="Product1">Product1</SelectItem>
      //               <SelectItem value="Product2">Product2</SelectItem>
      //               <SelectItem value="Product3">Product3</SelectItem>
      //             </SelectGroup>
      //           </SelectContent>
      //         </Select>
      //       </div>
      //       <div className="grid grid-cols-4 items-center gap-4">
      //         <Label htmlFor="quantity" className="text-right">
      //           Quantity
      //         </Label>
      //         <Input
      //           id="quantity"
      //           type="number"
      //           defaultValue={quant.toString()}
      //           className="col-span-3"
      //           required
      //           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      //             const newValue = parseInt(e.target.value, 10);
      //             setQuant(isNaN(newValue) ? 0 : newValue);
      //           }}
      //         />
      //       </div>
      //       <DialogFooter>
      //         <Button type="submit">Save changes</Button>
      //         <DialogClose ref={closeRef}>Cancel</DialogClose>
      //       </DialogFooter>
      //     </form>
      //   </DialogContent>
      // </Dialog>
    );
  } else {
    return <div> Can't open modal</div>;
  }
}
