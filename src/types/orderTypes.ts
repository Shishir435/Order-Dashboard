interface Order {
    id: string;
    customer_name: string;
    customer_email: string;
    product: string;
    quantity: number;
  }
  interface EditBtnProps {
    id: string;
    isEditModalOpen: boolean;
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export type {Order, EditBtnProps}