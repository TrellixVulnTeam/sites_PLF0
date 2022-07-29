import Home from "./pages/Home";
import {ABOUT_ROUTE, CONTACTS_ROUTE, DRIVERS_ROUTE, FEEDBACK_ROUTE, HOME_ROUTE, TARIFF_ROUTE} from "./utils/consts";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Tariff from "./pages/Tariff";
import Drivers from "./pages/Drivers";
import Feedback from "./pages/Feedback";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: TARIFF_ROUTE,
        Component: Tariff
    },
    {
        path: DRIVERS_ROUTE,
        Component: Drivers
    },
    {
        path: FEEDBACK_ROUTE,
        Component: Feedback
    }
]