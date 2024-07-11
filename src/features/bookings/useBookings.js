import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, error, cabins };
}
