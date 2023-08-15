
const STR_JSXAddOrderDetail: string = "STR_JSXAddOrderDetail";
const STR_JSXOrderDetailById: string = "STR_JSXOrderDetailById";
const STR_JSXGroupBoxOneInput: string = "STR_JSXGroupBoxOneInput";

export const ValueConstants = {
  ARRAY_STR_HEADER_INPUT: [
    "Tên vị thuốc",
    "Số lượng",
    "Đơn giá",
  ],
  ARRAY_STR_TYPE_MESSAGE: [
    "STR_SHOW_MESSAGE_REQUEST",//0
    "STR_SHOW_MESSAGE_SUCCESS",
    "STR_SHOW_MESSAGE_FAILURE",
    "STR_SHOW_MESSAGE_NONE",
    "STR_SHOW_MESSAGE_SUCCESS_NOT_HAVE_BUTTON",
    "STR_SHOW_MESSAGE_NONE_THEN_CALL_VOID",//5
    "STR_SHOW_MESSAGE_SUCCESS_THEN_CALL_VOID",
    "STR_SHOW_CONFIRM",
    "STR_CANCEL_CONFIRM",
  ],
  STR_CASE_JSXAddOrderDetail: {
    BamNutNhapLai: STR_JSXAddOrderDetail + "BamNutNhapLai",
  },
  STR_CASE_JSXOrderDetailById: {
    AcceptDelete: STR_JSXOrderDetailById + "AcceptDelete",
    voidDispatchGetOrderDetailByOrderId: STR_JSXOrderDetailById + "voidDispatchGetOrderDetailByOrderId",
    cancelUpdateOrderDetail: STR_JSXOrderDetailById + "cancelUpdateOrderDetail",
  },
  STR_CASE_JSXGroupBoxOneInput: {
    voidFocusAndSelect: STR_JSXGroupBoxOneInput + "voidFocusAndSelect",
    setBlnFocusTxtInput: STR_JSXGroupBoxOneInput + "setBlnFocusTxtInput",
  },
};
