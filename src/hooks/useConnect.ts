import { AppContext } from "providers";
import { useContext } from "react";

const useConnect = () =>  useContext(AppContext).connect;

export default useConnect;