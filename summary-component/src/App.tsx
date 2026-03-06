function Result() {
  return (
    <div className="text-white bg-indigo-600 rounded-b-4xl sm:rounded-4xl flex flex-1 flex-col gap-4 p-6 items-center justify-around">
      <div className="text-gray-300">Your Result</div>
      <div className="bg-indigo-900 rounded-full size-36 sm:size-54 flex flex-col justify-center items-center">
        <div className="text-5xl font-bold">76</div>
        <div className="text-gray-300">of 100</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-2xl font-bold">Great</div>
        <div className="text-center text-sm">
          You scored higher than 65% of the people who have taken these tests
        </div>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="flex flex-col gap-4 sm:py-6">
      <div className="font-bold">Summary</div>
      <div className="bg-red-100 p-4 gap-2 rounded-md flex">
        <div>o</div>
        <div className="text-red-500">Reaction</div>
        <div className="ml-auto">80/100</div>
      </div>
      <div className="bg-yellow-100 p-4 gap-2 rounded-md flex">
        <div>o</div>
        <div className="text-yellow-500">Memory</div>
        <div className="ml-auto">80/100</div>
      </div>
      <div className="bg-green-100 p-4 gap-2 rounded-md flex">
        <div>o</div>
        <div className="text-green-500">Verbal</div>
        <div className="ml-auto">80/100</div>
      </div>
      <div className="bg-indigo-100 p-4 gap-2 rounded-md flex">
        <div>o</div>
        <div className="text-indigo-500">Visual</div>
        <div className="ml-auto">80/100</div>
      </div>
    </div>
  );
}

function Continue() {
  return (
    <button className="bg-indigo-950 text-white font-bold w-full rounded-full py-6">
      Continue
    </button>
  );
}

function App() {
  return (
    <div className="sm:bg-neutral-500 sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-screen">
      <div className="sm:flex bg-white sm:rounded-4xl">
        <Result />
        <div className="p-4 flex flex-col gap-6 flex-1">
          <Summary />
          <Continue />
        </div>
      </div>
    </div>
  );
}

export default App;
