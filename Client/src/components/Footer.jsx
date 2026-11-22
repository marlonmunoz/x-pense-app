import React from "react";

// Plain text on the start page; styled as a box inside the app (see .app-main .app-footer in index.css).
function Footer() {
    return (
        <footer className="app-footer footer fade-in">
            <p>&copy;{new Date().getFullYear()} MarlonShade. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
