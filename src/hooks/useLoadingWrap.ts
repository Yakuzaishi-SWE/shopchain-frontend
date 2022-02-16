import { useEffect, useState } from "react";


const useLoadingWrap = <T>({ onResult, onError }: { onResult?: (r: T) => void, onError?: (err: string) => void } = {}) => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [result, setResult] = useState<T | undefined>(undefined);
    const [loaded, setLoaded] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (error !== undefined || loaded !== undefined) setLoaded(true);
    }, [result, error]);

    // 0 -> not called = loaded == undefined
    // 1 -> loading    = loaded == false
    // 2 -> loaded     = loaded == true

    return {
        loaded, error, result, startLoading: () => setLoaded(false), setResult: (d: T) => {
            setResult(d);
            if (onResult) onResult(d);
        }, setError: (err: string) => {
            setError(err);
            if (onError) onError(err);
        }
    };
};

export default useLoadingWrap;