export var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Unclaimed"] = 0] = "Unclaimed";
    OrderStatus[OrderStatus["Claimed"] = 1] = "Claimed";
    OrderStatus[OrderStatus["Preparing"] = 2] = "Preparing";
    OrderStatus[OrderStatus["PendingDelivery"] = 3] = "PendingDelivery";
})(OrderStatus || (OrderStatus = {}));
//# sourceMappingURL=order.js.map