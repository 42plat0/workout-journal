import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar.jsx";

export function Layout() {
    return (
        <>
            <NavBar/>
            <main className="w-full h-full rounded-lg shadow-md p-8 flex flex-col items-center gap-5">
                <Outlet />
            </main>
        </>
    );
}
