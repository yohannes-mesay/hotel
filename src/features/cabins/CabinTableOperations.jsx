import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", val: "all" },
          { label: "No-discount", val: "no-discount" },
          { label: "With-discount", val: "with-discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
