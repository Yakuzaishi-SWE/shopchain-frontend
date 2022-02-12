import { useEffect, useState } from "react";


const useTransaction = (id: string): ITransaction|undefined => {
    const [transaction, setTransaction] = useState<ITransaction|undefined>(undefined);

    useEffect(() => {
        // get transaction
    }, []);

    return transaction;
}

export default useTransaction;