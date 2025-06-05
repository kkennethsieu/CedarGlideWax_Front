import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../services/apiReviews";

export default function useReviews() {
  const {
    isLoading,
    data: reviews,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
  });
  return { isLoading, reviews, error };
}
