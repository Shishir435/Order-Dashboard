import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { nanoid } from "nanoid";
import { FormEvent, useRef, useState } from "react";
interface Product {
  id: string;
  customer_name: string;
  customer_email: string;
  product: string;
  quantity: number;
}
export function ActionBtn({
  setProducts,
  ActionType,

}: {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  ActionType: "ADD" | "EDIT",
}) {
  const [name, setName] = useState("Pedro Duarte");
  const [email, setEmail] = useState("test@test.com");
  const [product, setProduct] = useState("Product1"); // Initialize product as an empty string
  const [quantity, setQuantity] = useState("1");
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
    const newProduct: Product = {
      id: nanoid(),
      customer_name: name,
      customer_email: email,
      product: product,
      quantity: Number(quantity),
    };
    // console.log(newProduct);
    // Update the products state with the new product
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    if (closeRef.current) {
      closeRef.current.click();
    }

  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {ActionType === "EDIT" ? "Edit" : "Add"} Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{ActionType}</DialogTitle>
          <DialogDescription>
            {ActionType === "EDIT" ? " Make changes to" : "Add"} your Product
            here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSave} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
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
              defaultValue="test@test.com"
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
                setProduct(value);
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
              defaultValue="1"
              className="col-span-3"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
            <DialogClose ref={closeRef}>Cancel</DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
