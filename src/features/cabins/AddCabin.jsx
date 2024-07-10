import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new cabins
      </Button>
      {showForm && <Modal />}
    </>
  );
}

export default AddCabin;
