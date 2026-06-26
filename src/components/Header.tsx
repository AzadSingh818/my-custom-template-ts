
interface HeaderProps {
  title?: string;
  userEmail: string | null;
  onLogout: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export default function Header({ title = "SaaSify Portal", userEmail, onLogout, activeNav, setActiveNav }: HeaderProps) {
  const navLinks = [
    { name: 'Home', path: 'Dashboard' },
    { name: 'About', path: 'About' },
    { name: 'Contact', path: 'Contact' }
  ];

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '0 2rem',
      height: '70px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', borderRadius: '8px' }} />
          <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.025em' }}>{title}</h1>
        </div>
        
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <span
              key={link.name}
              onClick={() => setActiveNav(link.path)}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: activeNav === link.path ? '#3b82f6' : '#64748b',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
            >
              {link.name}
            </span>
          ))}
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {userEmail && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>Logged In</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>{userEmail}</p>
            </div>
            <button
              onClick={onLogout}
              style={{
                background: '#f1f5f9',
                color: '#ef4444',
                border: '1px solid #cbd5e1',
                padding: '8px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}