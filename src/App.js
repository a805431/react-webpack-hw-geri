import MenuOption from "./components/MenuOption";

function App() {
   return (
      <div>
         <div>This is a Mock Header</div>
         <MenuOption title="Current Farm" />
         <MenuOption title="Fields" />
         <MenuOption title="Nutrition Plan" />
      </div>
   );
}

export default App;