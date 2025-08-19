import { useDispatch,useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { AppDispatc,RootState } from "./store";

export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export const useAppDispatch=()=>useDispatch<AppDispatc>()