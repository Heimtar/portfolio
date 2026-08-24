import { Header } from './components/Header/Header';
import { useLanguage } from './context/useLanguage';

function App() {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '1rem' }}>
      {/* Подключаем нашу готовую шапку */}
      <Header />
      
      {/* Сюда в следующем шаге встанет контейнер Bento-сетки */}
      <main style={{ padding: '1rem 0' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
          {t.projectsTitle}
        </h2>
      </main>
    </div>
  );
}

export default App;
