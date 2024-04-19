import {TypedUseSelectorHook, useSelector} from "react-redux";
import IStoreState from "../../interfaces/IStoreState";

export const useStoreSelector: TypedUseSelectorHook<IStoreState> = useSelector;