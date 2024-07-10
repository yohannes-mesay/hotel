import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModel((open) => !open)}>
        Add new cabins
      </Button>
      {openModel && (
        <Modal onClose={()=>setOpenModel(false)}>
          <CreateCabinForm onCloseModel={()=>setOpenModel(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
