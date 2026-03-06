function Greet({ }{ name }: string) {
  return <div>Hello</div>
}

function App() {
  const name = "sam"
  return <div className="font-bold bg-indigo-500">{Greet}</div>
}

export default App
