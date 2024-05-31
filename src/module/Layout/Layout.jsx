
const Layout = ({children}) => {
    return (
        <div>
            <header>
                <nav></nav>
            </header>
            <section>
                {children}
            </section>
        </div>
    );
};

export default Layout;