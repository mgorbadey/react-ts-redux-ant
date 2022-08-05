import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RoootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RoootState> = useSelector