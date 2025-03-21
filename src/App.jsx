import BookGeneratorPage from "./pages/BookGeneratorPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">📚 Book Generator</h1>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <BookGeneratorPage />
      </main>
    </div>
  );
}
