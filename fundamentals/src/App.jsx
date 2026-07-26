import Card from "./components/Card";

function App() {
  const user = {
    username: "Kartik",
    address: "Ghaziabad",
    college: "ABESIT",
  };
const user1 = {
    username: "gaurav",
    address: "Ghaziabad",
    college: "ey",
  };
  return (
    <>
  <Card user={user} />
  <Card user={user1} />
  </>

  )
}

export default App;