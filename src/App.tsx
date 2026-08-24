import { useLanguage } from './context/useLanguage';

function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: '#fff', background: '#0b0c10', minHeight: '100vh' }}>
      <p>Текущий язык: {language.toUpperCase()}</p>
      <h1>{t.hero.title} {t.hero.accentName}</h1>
      <button onClick={toggleLanguage} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Change Language / Сменить язык
      </button>
    </div>
  );
}

export default App;
