import TransactionListController from "controllers/TransactionList";
import React from "react";


const TransactionListPage = () => {

    const queryParams = new URLSearchParams(window.location.search);
    const from = queryParams.get("from");

    console.log(from);

    return <>{
        (from == "buyer") ? (<>
            <h1>Your orders</h1>
        </>
        ) : (<>
            <h1>Your ingoing transactions</h1>
        </>)
    }
    <TransactionListController from={from}/>
    </>;
};


export default TransactionListPage;