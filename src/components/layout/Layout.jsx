import AppBar from "@/components/AppBar";
import {CssBaseline} from "@mui/material";

function Layout(props) {
    return (
        <>
            <CssBaseline />
            <AppBar />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout;