import "./App.css";
import Card from "./components/Card";

const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];
// function createId(){
//   let id =0;

//   return function(){
//     return id++;
//   }
// }

// const incrementId=createId
function App() {
  return (
    <div className="App">
      {comment.map((el,i) => {
        return <Card key={i} image={el.author.avatarUrl} date={el.date} name={el.author.name} text={el.text} />;
      })}
    </div>
   
    )
}

export default App;
