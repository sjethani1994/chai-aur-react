import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Sumit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis",
    imageUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
    btnText: 'View Profile'
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        TailWind Test CSS
      </h1>
      <Card channel="Chai Aur Code" obj={myObj} />
    </>
  );
}

export default App;
