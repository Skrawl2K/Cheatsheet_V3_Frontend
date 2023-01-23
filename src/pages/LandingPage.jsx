import './LandingPage.css'
import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar";
import Login from "../components/Login.jsx";

const LandingPage = () => {
    return (
        <main>
            <section>
                <h1 className='headline'>CHEATSHEET</h1>
                <h2 className='headline'>Version - 3.0</h2>
            </section>
            <Navbar />
            <Login />
            <section>
            </section>
        </main>
    )
};

export default LandingPage;