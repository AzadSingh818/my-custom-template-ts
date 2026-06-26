
export default function Dashboard() {
  const stats = [
    { title: "Monthly Revenue", value: "$48,259.00", change: "+12.5% vs last month", color: "#3b82f6", bg: "#eff6ff" },
    { title: "Active Subscribers", value: "12,482", change: "+4.2% vs last week", color: "#10b981", bg: "#ecfdf5" },
    { title: "System Uptime", value: "99.98%", change: "Stable", color: "#f59e0b", bg: "#fffbeb" },
    { title: "Conversion Rate", value: "3.48%", change: "+0.8% overall", color: "#8b5cf6", bg: "#f5f3ff" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', boxSizing: 'border-box' }}>
      <div>
        <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 700, color: '#0f172a' }}>Dashboard Overview</h2>
        <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.95rem' }}>Aapka system aur real-time core metrics.</p>
      </div>

      {/* Stats Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ width: '4px', height: '100%', background: stat.color, position: 'absolute', left: 0, top: 0 }} />
            <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.title}</h4>
            <p style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.75rem', fontWeight: 700, color: '#0f172a' }}>{stat.value}</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: stat.color }}>{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Analytical Visual blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Modern Bar Representation using pure CSS */}
        <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#0f172a' }}>Project Goal Progress</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Cloud Deployments', 'Database Seed Operations', 'UI Component Library Assets'].map((task, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 500, color: '#475569' }}>{task}</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{idx === 0 ? '80%' : idx === 1 ? '45%' : '95%'}</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    width: idx === 0 ? '80%' : idx === 1 ? '45%' : '95%',
                    height: '100%',
                    background: idx === 0 ? '#3b82f6' : idx === 1 ? '#ef4444' : '#10b981',
                    borderRadius: '4px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Activity Logs */}
        <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', color: '#0f172a' }}>System Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#10b981' }}>●</span>
              <div>
                <strong style={{ color: '#0f172a' }}>User signup successful</strong>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.75rem' }}>2 mins ago</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#3b82f6' }}>●</span>
              <div>
                <strong style={{ color: '#0f172a' }}>API response test latency stable</strong>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.75rem' }}>1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}