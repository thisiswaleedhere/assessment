import React, { useEffect, useState } from 'react'

const ToggleSwitch = ({ setSign }) => {

    // State Declaration 
    const [isToggled, setIsToggled] = useState(true);


    //useEffect Hook
    useEffect(() => {
        if (isToggled) {
            setSign(1)
        }
        else setSign(-1)
    }, [isToggled])


    return (

        < div className='flex space-x-2 px-2' >

            {/* Sign Toggle Component */}

            <div className={` ${isToggled && "font-bold"} `}> + </div>

            <div className='relative cursor-pointer w-12 bg-white rounded-full'
                onClick={() => { setIsToggled(!isToggled) }}>
                <div className={`absolute ${isToggled ? "top-0 left-0" : "left-6"} transition-all w-5 h-5 m-0.5 rounded-full bg-yellow-400 text-white font-bold`}></div>
            </div>

            <div className={` ${!isToggled && "font-bold"} `}> - </div>

        </div >

    )
}

export default ToggleSwitch