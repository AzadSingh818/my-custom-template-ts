
interface SidebarProps {
  activeTab: string;
  onSelect: (tab: string) => void;
}

export default function Sidebar({ activeTab, onSelect }: SidebarProps) {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Users List', icon: '👥' },
    { name: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside style={{
      width: '260px',
      height: 'calc(100vh - 70px)',
      background: '#0f172a',
      color: '#94a3b8',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRight: '1px solid #1e293b'
    }}>
      <div style={{ padding: '1.5rem 1rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <li
                key={item.name}
                onClick={() => onSelect(item.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: isActive ? '#1e293b' : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.95rem',
                  transition: 'all 0.2s'
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ padding: '1.5rem', borderTop: '1px solid #1e293b', fontSize: '0.8rem', color: '#64748b' }}>
        Environment: <strong style={{ color: '#10b981' }}>Development</strong>
      </div>
    </aside>
  );
}