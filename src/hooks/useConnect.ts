import { AppContext } from "providers";
import { useContext } from "react";


const useConnect = () => {
    const { connect } = useContext(AppContext);

    return connect;
};

export default useConnect;