import { useState } from "react";
import SingleRow from "./components/SingleRow";


function App() {

  //State Declarations

  const [addStack, setAddStack] = useState([]);
  const [seed, setSeed] = useState(0);



  return (

    <div className="min-w-[350px] max-w-5xl mx-auto h-screen pt-8 bg-[url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] ">

      <div className="w-4/5 lg:w-3/5 mx-auto mb-8 text-center shadow-default bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-2xl font-quicksand" key={seed}>


        {/* title */}

        <h1 className="py-4 font-semibold text-gray-900 text-3xl sm:text-4xl">React Calculator</h1>


        {/* Single Row Component */}

        {addStack.length > 0 ?
          addStack.map(({ value, type }, i) => {
            return (<SingleRow key={i} setSeed={setSeed} index={i} number={value} type={type} addStack={addStack} setAddStack={setAddStack} />)
          })
          : <div className="text-xs px-2"> Click on the 'Add Row' button to start adding numbers </div>
        }


        {/* 'Add Row' Button Component */}

        <button
          className="mt-4 px-4 py-1 rounded-2xl font-medium bg-yellow-400 shadow-default hover:scale-110 hover:font-bold transition-all"
          onClick={() => setAddStack([...addStack, { value: '', type: 'enabled' }])}>
          Add Row
        </button>

        <hr className="h-0.5 w-5/6 mx-auto mt-6 bg-gray-300" />


        {/* Result Display  */}
        <div className="flex justify-center text-xl py-6">

          <div>Result:</div>

          <div className="pl-2 font-semibold">
            {addStack.filter(({ type }) => type === "enabled").length > 0 ? addStack.filter(({ type }) => type === "enabled").map((a) => a.value).reduce((a, b) => a + b) : 0}
          </div>

        </div>

      </div>

    </div >
  );
}

export default App;
