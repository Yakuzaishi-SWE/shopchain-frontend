import { AppContext } from "providers";
import { useContext } from "react";


const useLoadingOverlay = (): [boolean, { start: () => void, stop: () => void }] => {
    const {state, start, stop} = useContext(AppContext).waiting;

    return [state, { start, stop}];
};

export default useLoadingOverlay;