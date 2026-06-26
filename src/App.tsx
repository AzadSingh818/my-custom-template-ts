import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

export default function App() {
  const [user, setUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Dashboard');

  const handleLogin = (email: string) => {
    setUser(email);
  };

  if (!user) {
    return <Auth onAuthSubmit={handleLogin} />;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#f8fafc'
    }}>
      <Header 
        title="Custom Admin App" 
        userEmail={user} 
        onLogout={() => setUser(null)} 
        activeNav={activeTab} 
        setActiveNav={setActiveTab} 
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar activeTab={activeTab} onSelect={setActiveTab} />

        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <main style={{ padding: '2rem', flex: 1 }}>
            {activeTab === 'Dashboard' && <Dashboard />}
            {activeTab !== 'Dashboard' && (
              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <h2 style={{ margin: 0, color: '#0f172a' }}>{activeTab} Screen</h2>
                <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Is page ko modify karke aap iski custom integration kar sakte hain.</p>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}