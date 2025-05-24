import Footer from "@/Components/Common/Footer";
import Navbar from "@/Components/Common/Navbar";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <section>{children}</section>
            <Footer />
        </main>
    );
}
