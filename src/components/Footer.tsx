
export default function Footer() {
  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.85rem',
      color: '#64748b'
    }}>
      <div>
        © {new Date().getFullYear()} SaaSify Inc. All rights reserved.
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#privacy" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="#terms" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
        <a href="#support" style={{ color: '#64748b', textDecoration: 'none' }}>Contact Support</a>
      </div>
    </footer>
  );
}