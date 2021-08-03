import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSignupReducer, userSigninReducer, courierBoySigninReducer, courierBoySignupReducer, editProfileReducer } from './reducers/userReducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { branchRegisterReducer,branchSigninReducer } from './reducers/branchReducers'
import { addPaymentReducer,confirmOtpReducer } from './reducers/paymentReducers'

import { changeStatusReducer, courierListReducer, courierReducer,assignCourierReducer } from './reducers/courierReducers'
import { fetchBranchReducer } from './reducers/getBranchReducers'
import { assignCourierBoy } from './actions/branchManagerActions'


const reducers=combineReducers({
    userSignup:userSignupReducer,
    userSignin:userSigninReducer,
    branchRegister:branchRegisterReducer,
    branchSignin:branchSigninReducer,
    courierBoySignup:courierBoySignupReducer,
    courierBoySignin:courierBoySigninReducer,
    payment:addPaymentReducer,
    courier:courierReducer,
    otp:confirmOtpReducer,
    branch:fetchBranchReducer,
    getCourierList:courierListReducer,
    changeStatus:changeStatusReducer,
    assign:assignCourierReducer,
    editProfile:editProfileReducer,
})
const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store