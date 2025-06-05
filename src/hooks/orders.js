import { useMutation, useQuery } from "@tanstack/react-query";
import { addOrder, getOrder } from "../services/apiOrders";

export function useCreateOrder() {
  const {
    mutate: createOrder,
    isLoading,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: addOrder,
  });

  return { createOrder, isLoading, error, isSuccess };
}

export default function useGetOrder(orderId) {
  const {
    isLoading,
    data: order,
    error,
  } = useQuery({
    queryKey: ["orders", orderId],
    queryFn: () => getOrder(orderId),
  });

  return { isLoading, order, error };
}
