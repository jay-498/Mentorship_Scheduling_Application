import { SET_BOOKING_TIME,SET_BOOKING_DATE} from "../actionTypes/booking";

const initialState={
    timings: ["8:00","9:00","10:00","11:00","2:00","3:00","5:00","6:00","7:00"],
    booking_time: null,
    booking_date: null
}

const bookingReducer = (state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type)
    {
        case SET_BOOKING_TIME:
            return{...state,
                    booking_time: action.payload}
        case SET_BOOKING_DATE:
            return{...state,
                    booking_date: action.payload}
        default:
            return state;
    }
}

export default bookingReducer;