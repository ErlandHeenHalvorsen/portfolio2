import { Outlet } from "react-router";
import Header from "./components/header/Header";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2023 Erland's Portfolio</p>
            </footer>
        </div>
    );
}
export default Layout;