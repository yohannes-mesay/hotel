import SavedEvents from "../components/saved/SavedEvents";
import SavedProducts from "../components/saved/SavedProducts";
import SavedServices from "../components/saved/SavedServices";
import Mixed from "../components/saved/Mixed";

function Saved() {
  return (
    <div className="flex-col gap-0">
      <SavedEvents />
      <SavedServices />
      <SavedProducts />
      <Mixed />
    </div>
  );
}

export default Saved;
