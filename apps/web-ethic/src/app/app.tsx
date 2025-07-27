import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    // Ana kapsayıcı: Temamızdaki renkler ve temel düzeni koruyoruz.
    <div className="bg-secondary text-primary rounded-lg p-6 mt-4 border-2 border-primary-dark">
      <h2 className="text-3xl font-bold text-center mb-4">
        Web-Ethic Micro-Frontend
      </h2>

      <hr className="my-4 border-primary/50" />

      {/* Mevcut navigasyon ve yönlendirme yapısını koruyoruz */}
      <div className="flex gap-8">
        <nav role="navigation" className="p-4 border-r border-primary/50">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/page-2" className="hover:text-white">
                Page 2
              </Link>
            </li>
          </ul>
        </nav>

        <main className="flex-grow pt-2">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  This is the generated root route.{' '}
                  <Link to="/page-2" className="font-bold hover:text-white">
                    Click here for page 2.
                  </Link>
                </div>
              }
            />
            <Route
              path="/page-2"
              element={
                <div>
                  <Link to="/" className="font-bold hover:text-white">
                    Click here to go back to root page.
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
