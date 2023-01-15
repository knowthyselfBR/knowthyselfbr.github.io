const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top">
        <div class="container">
            <a href="#" class="navbar-brand">RD</a>

            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a href="#learn" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                <a href="#questions" class="nav-link">Projects</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
export default Navbar