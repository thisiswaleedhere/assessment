import React, { useEffect, useState } from 'react'
import ToggleSwitch from './ToggleSwitch'


const SingleRow = ({ index, setSeed, number, type, addStack, setAddStack }) => {


    // State Declarations 

    const [sign, setSign] = useState(1);
    const [num, setNum] = useState(number);
    const [isEnabled, setIsEnabled] = useState(type === 'enabled' ? true : false);



    //UseEffect Hook

    useEffect(() => {

        const presentValue = sign * num;

        const newStack = addStack.map(({ value, type }, i) => {
            if (i === index) {

                if (isEnabled) {
                    return { value: presentValue, type: "enabled" }
                }

                else return { value: presentValue, type: "disabled" };
            }
            else return { value, type };
        });

        setAddStack(newStack);

    }, [sign, num, isEnabled])





    //Delete Handler Function

    function deleteHandler() {
        const updated = addStack.filter(({ value, type }, i) => i !== index);
        setAddStack(updated);
        setSeed(Math.random());
    }




    return (

        <div className='relative flex flex-col sm:flex-row sm:justify-around mx-6 md:w-5/6 rounded-3xl sm:rounded-full md:mx-auto sm:h-10 bg-gray-200 pt-2 sm:pb-2 mb-2'>


            {/* Sign Toggler Component  */}
            <div className='w-24 mx-auto sm:mx-0'><ToggleSwitch setSign={setSign} /></div>



            {/* Number Input Field  */}
            <input
                type="number"
                placeholder='Enter a number here'
                name='numberInput'
                min='0'
                value={num}
                onChange={(event) => setNum(event.target.value)}
                className="pl-2 w-48 mx-auto mt-2 sm:my-0 sm:mx-1 rounded-lg" />

            {!isEnabled && <div className='absolute h-28 sm:h-10 w-full rounded-3xl sm:rounded-full left-0 top-0 bg-gray-400 opacity-80'></div>}


            {/* Button Components  */}
            <div className='w-52 mx-auto flex justify-center sm:justify-around my-3 sm:my-0'>

                {/* Disable/Enable Button Component  */}
                <button
                    className={`z-20 h-5 my-auto w-20 mx-auto sm:mx-0 sm:h-6 bg-gray-200 px-4 sm:ml-2 rounded-2xl text-xs font-semibold shadow-default outline-dotted hover:outline-none 
                          ${isEnabled ? "text-gray-500 hover:bg-gray-500 hover:text-white" : "text-green-500 hover:bg-green-600 hover:text-white"}`}
                    onClick={() => setIsEnabled(!isEnabled)}>
                    {isEnabled ? 'Disable' : 'Enable'}
                </button>



                {/* Delete Button Component */}
                <button
                    className='z-20 h-6 w-20 mx-auto bg-white px-4 sm:mx-2 rounded-2xl text-xs font-bold text-red-500 outline-white hover:outline-double hover:outline-red-500 '
                    onClick={deleteHandler}>
                    Delete
                </button>

            </div>

        </div >
    )
}

export default SingleRow