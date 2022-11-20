import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import registration from "../components/registration/registration";
import main from "../components/main/main";


export const publicRoutes=[
    {
        path: LOGIN_ROUTE,
        element: registration
    }
]
export const privateRoutes=[
    {
        path: MAIN_ROUTE,
        element: main
    }
]