import React from 'react'
import { useTransition, animated } from "@react-spring/web";

import { useStateContext } from "../context/contextProvider";

const WalletsList = ({ children }) => {
    const { isClicked } = useStateContext()
    const transition = useTransition(isClicked, {
        from: { opacity: -1 },
        enter: { opacity: 1 },
        leave: { opacity: -1 }
    })

    return (
        <div>
            {transition((style, item) =>
                item ? isClicked &&
                    <animated.div style={style}>
                        <div className='flex flex-col fixed right-2 top-16 bg-gray-100 p-5 rounded-lg shadow-xl shadow-blue-100 min-w-max'>
                            {children}
                        </div>
                    </animated.div> : ""
            )}

        </div>

    )
}

export default WalletsList