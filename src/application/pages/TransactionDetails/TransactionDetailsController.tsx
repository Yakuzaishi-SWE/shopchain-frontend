import { observer } from "mobx-react-lite";
import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import TransactionDetailsViewModel from "./TransactionDetailsViewModel";
import TransactionDetailsView from "./TransactionDetailsView";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { OrderStateEnum } from "types/enums";

export default observer(function TransactionDetailsController() {
  const vm = useViewModel(TransactionDetailsViewModel, RootStore.getInstance());
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
      //private orderId
      //setOrderId
      if(id) {
        vm.setOrderId(id);
      }

      //getter privato per ottenere l'ordine da RootStore.orderStore
      function getOrder() {
        return RootStore.getInstance().orderStore.getOrderById(id || "");
      }
      
      function isPaid() {
        return getOrder().state.isPaid;
      }

  }, [id]);
  if (!id) return <Navigate to="/transaction/out/" />;
  return <TransactionDetailsView 
    id={vm.id}
    ownerAddress={vm.ownerAddress}
    sellerAddress={vm.sellerAddress}
    amount={vm.amount}
    state={vm.state}
    isPaid={vm.isPaid}
  />;

})
