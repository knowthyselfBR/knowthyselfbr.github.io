import "../styles/components/navbar.sass";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top navbar-custom">
            <div class="container">
                <a href="" class="navbar-brand">RD</a>

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
                    <a href="" class="nav-link disabled">Home</a>
                    </li>
                    <li class="nav-item">
                    <a href="" class="nav-link disabled">Projects</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar