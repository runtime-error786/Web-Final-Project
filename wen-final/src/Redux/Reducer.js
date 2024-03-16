const initialState = []; // Initial state is an empty array
let Rol = (state = initialState, action) => {
    if (action.type === "Role") {
        console.log("red",action.payload)
        return state = action.payload;
    }
    else {
        return state;
    }
}

let Record = (state = initialState, action) => {
    if (action.type === "Record") {
        console.log("red",action.payload)
        return state = action.payload;
    }
    else {
        return state;
    }
}

let SearchUser = (state = "", action) => {
    if (action.type === "SearchUser") {
        console.log("red",action.payload)
        return state = action.payload;
    }
    else {
        return state;
    }
}

let SortUser = (state = false, action) => {
    if (action.type === "SortUser") {
        console.log("red",action.payload)
        return state = action.payload;
    }
    else {
        return state;
    }
}

let Next = (state = 0, action) => { // default state should be 1
    if (action.type === "NextPage") {
        return action.payload;
    }
    return state;
}


let Totalpage = (state = 0, action) => {
    if (action.type === "Total") {
        return action.payload;
    }
    return state;
}
let Forgot = (state = true, action) => {
    if (action.type === "Forgot") {
        return action.payload;
    }
    return state;
}

let Showbtn = (state = true, action) => {
    if (action.type === "ShowSign") {
        return action.payload;
    }
    return state;
}
export { Rol,Record,SearchUser,SortUser,Next,Totalpage,Forgot,Showbtn };