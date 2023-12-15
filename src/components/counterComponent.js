import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from '../redux/reducers/counterSlice'
import { t } from "i18next";
const Counter=()=> {
  const count = useSelector((state) => state.counterReducer.value)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>{t("Hello World")}</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter