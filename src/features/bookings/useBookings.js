import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter = { field: "status", filterValue, method: "eq" };
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue.split("-");
  const sortBy = { field, direction };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings(filter, sortBy),
  });

  return { isLoading, error, bookings };
}
