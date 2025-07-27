import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TAILWIND TEST ALANI */}
      <div className="bg-primary text-white p-4 rounded m-8 text-center shadow-lg">
        Kurumsal Mavi ve Beyaz Testi Başarılı!
      </div>
      {/* NAVIGATION */}
      <nav className="flex justify-center gap-8 mb-8">
        <Link className="underline text-primary-dark" to="/">
          Home
        </Link>
        <Link className="underline text-primary-dark" to="/page-2">
          Page 2
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center">
              <span className="font-medium">Burası ana sayfa.</span>
              <Link className="ml-2 underline text-primary" to="/page-2">
                Sayfa 2'ye geç
              </Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div className="text-center">
              <span className="font-medium">Burası ikinci sayfa.</span>
              <Link className="ml-2 underline text-primary" to="/">
                Ana sayfaya dön
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
