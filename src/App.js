import Sellerform from "./My Components/Sellerform";
import Itemlist from "./My Components/Itemlist";
import Modal from "./My Components/Modal";

function App() {
  return (
    <div>
      <h2>Your Candy Shop!</h2>
      <Sellerform />
      <hr/>
      <Itemlist />
      <hr/>
      <Modal />
    </div>
  );
}
export default App;
