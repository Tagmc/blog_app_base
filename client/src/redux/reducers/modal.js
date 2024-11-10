import { INIT_STATE } from "../../constant.js";
import { getType, hideModal, showModal } from "../actions/index.js";

//state luon can mot gia tri khoi tao
export default function modalReducers(state = INIT_STATE.modal, action) {
    switch(action.type) {
        case getType(showModal):
            return {
                isShow: true
            };
        case getType(hideModal):
            return {
                isShow: false
            };
        default:
            return state
    }
}