import { AppContext } from "providers";
import { useContext } from "react";

const useSinglePayment = () => useContext(AppContext).contract;

export default useSinglePayment;