import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TodoApp from "./components/Todo";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 min-h-screen text-gray-900
">
      <div className="max-w-3xl mx-auto p-5">
        <TodoApp />
      </div>
      </div>
      <Footer />
    </>
  );
}
