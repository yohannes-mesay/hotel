import { useBookings } from "../features/bookings/useBookings";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import BookingsTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
function Bookings() {
  const { bookings, isLoading } = useBookings();
  console.log(bookings);
  if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />{" "}
      </Row>
      <BookingsTable />
    </>
  );
}

export default Bookings;
