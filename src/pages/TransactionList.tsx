import TransactionListController from "controllers/TransactionList";
import PageLoaderController from "controllers/PageLoader";
import React from "react";


const TransactionListPage = () => {
    let loading = true;

    /*
    if(loading){
        return <div className="page-loader">
            <h1>Loading ...</h1>
            <PageLoaderController loading={loading}/>
        </div>
    } else {
    }
    */
    return <>
        <h1>Transaction List</h1>
        <TransactionListController/>
    </>

}


export default TransactionListPage;