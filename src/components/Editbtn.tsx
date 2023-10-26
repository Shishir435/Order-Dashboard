import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { editOrder, removeOrder } from "@/features/order/orderSlice";
import { EditBtnProps, Order } from "@/types/orderTypes";
import { RootState } from "@/app/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { useSelector } from "react-redux";

export function EditBtn({
  id,
  isEditModalOpen,
  setIsEditModalOpen,
}: EditBtnProps) {
  const dispatch = useDispatch();
  const orders: Order[] = useSelector(
    (state: RootState) => state.orders.orders
  );

  const orderToEdit = orders.find((item) => item.id === id) || {
    id: "",
    customer_name: "demo name",
    customer_email: "demo@email.com",
    product: "Product1",
    quantity: 1,
  };

  const [updatedOrder, setUpdatedOrder] = useState<Order>(orderToEdit);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    dispatch(editOrder(updatedOrder));
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      dispatch(removeOrder(id));
      setIsEditModalOpen(false);
    }
  };

  return isEditModalOpen ? (
    <div className="w-full fixed z-50 flex justify-center -mt-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Edit</CardTitle>
          <CardDescription>Edit Your Product</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={updatedOrder.customer_name}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUpdatedOrder({
                    ...updatedOrder,
                    customer_name: e.target.value,
                  })
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
                defaultValue={updatedOrder.customer_email}
                className="col-span-3"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUpdatedOrder({
                    ...updatedOrder,
                    customer_email: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Product</Label>
              <Select
                onValueChange={(value) => {
                  setUpdatedOrder({ ...updatedOrder, product: value });
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
                min={1}
                defaultValue={updatedOrder.quantity.toString()}
                className="col-span-3"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newValue = parseInt(e.target.value, 10);
                  setUpdatedOrder({
                    ...updatedOrder,
                    quantity: isNaN(newValue) ? 0 : newValue,
                  });
                }}
              />
            </div>
            <Button type="submit">Edit</Button>
            <Button type="submit" className="bg-red-600" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  ) : (
    <div>Can't open modal</div>
  );
}
