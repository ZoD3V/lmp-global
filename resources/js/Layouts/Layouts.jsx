import Footer from "@/Components/Common/Footer";
import Navbar from "@/Components/Common/Navbar";

export default function Layout({ children }) {
    return (
        <main className="w-full h-full overflow-hidden">
            <Navbar />
            <section>{children}</section>
            <Footer />
        </main>
    );
}
