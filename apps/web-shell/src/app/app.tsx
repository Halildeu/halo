export function App() {
  return (
    // Eğer bu div'in arka planı kıpkırmızı olursa,
    // stil sistemimiz çalışıyor demektir.
    <div className="bg-test-red min-h-screen">
      <h1 className="text-white text-4xl p-8">
        TAILWIND TEST SAYFASI
      </h1>
    </div>
  );
}

export default App;