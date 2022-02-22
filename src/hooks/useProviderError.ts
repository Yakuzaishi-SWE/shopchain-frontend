import { AppContext } from "providers";
import { useContext } from "react";

const useProviderError = () => useContext(AppContext).provider_error;

export default useProviderError;