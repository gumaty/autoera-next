import AppBar from "@/components/AppBar";
import {CssBaseline} from "@mui/material";
import Footer from "@/components/Footer";

function Layout(props) {
    return (
        <>
            <CssBaseline />
            <AppBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;