import { useNavigate } from "react-router";

export function goHomeHandler() {
    const nav = useNavigate();
    nav("/");
}
