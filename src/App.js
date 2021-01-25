

import React, {
    useContext,
    useEffect,
    useState,
    useMemo,
    useCallback,
    useRef,
    useLayoutEffect,
    useReducer,
    forwardRef,
    useImperativeHandle,
    useDebugValue
} from 'react'

import Ts from './Ts'

/**
 * TS环境置入：npm install --save typescript @types/node @types/react @types/react-dom @types/jest
 * via-https://juejin.cn/post/6844903911396999182
 */

const App = ()=>{

    return (
        <>
            <Ts/>
        </>
    )

}

export default App;
