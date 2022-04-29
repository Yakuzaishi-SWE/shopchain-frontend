import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TransactionDetailsView from "./TransactionDetailsView";
import TransactionDetailsViewModel from "./TransactionDetailsViewModel";

export default observer(function TransactionDetails() {
  const vm = useViewModel(TransactionDetailsViewModel, RootStore.getInstance());
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
      if(id) {
        vm.setOrderId(id);
      }
  }, [id]);

  //if (!id) return <Navigate to="/transaction/out/" />;

  return <TransactionDetailsView 
    id={vm.id}
    ownerAddress={vm.ownerAddress}
    sellerAddress={vm.sellerAddress}
    ftm={vm.ftm}
    wei={vm.wei}
    state={vm.state}
    isPaid={vm.isPaid}
    unlock={vm.unlock}
    refund={vm.refund}
  />;

})
