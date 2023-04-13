import "./App.css";
import EntriesSection from "./Components/EntriesSection";
import EntryForm from "./Components/EntryForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
