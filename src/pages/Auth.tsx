import React, { useState } from 'react';

interface AuthProps {
  onAuthSubmit: (email: string) => void;
}

export default function Auth({ onAuthSubmit }: AuthProps) {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  
  // States for Signup form fields
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  
  const [error, setError] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isSignup) {
      // Validations for Signup
      if (!fullName || !email || !phone || !password || !confirmPassword) {
        setError('Sabhi fields bharna compulsory hai.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords match nahi ho rahe hain!');
        return;
      }
      if (!acceptTerms) {
        setError('Kripya Terms & Conditions ko accept karein.');
        return;
      }
      console.log("Signup Successful: ", { fullName, email, phone });
    } else {
      // Validations for Login
      if (!email || !password) {
        setError('Kripya Email aur Password enter karein.');
        return;
      }
    }

    // Pass email as login success state trigger
    onAuthSubmit(email);
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    boxSizing: 'border-box' as const,
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '0.9rem',
    marginTop: '0.35rem',
    outline: 'none'
  };

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#475569'
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#ffffff',
        padding: '2.5rem',
        borderRadius: '16px',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        border: '1px solid #f1f5f9'
      }}>
        {/* UI branding */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '28px', height: '28px', background: '#3b82f6', borderRadius: '6px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>SaaSify</span>
        </div>

        <h2 style={{ textAlign: 'center', color: '#0f172a', margin: '0 0 0.5rem 0', fontWeight: 700, fontSize: '1.5rem' }}>
          {isSignup ? "Create a New Account" : "Sign In to Workspace"}
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', margin: '0 0 2rem 0' }}>
          {isSignup ? "Fill down below fields to access templates" : "Enter email/password below"}
        </p>

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '10px', borderRadius: '6px', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {isSignup && (
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                style={inputStyle}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}

          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="you@domain.com"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {isSignup && (
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 99999 99999"
                style={inputStyle}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}

          <div>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isSignup && (
            <div>
              <label style={labelStyle}>Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                style={inputStyle}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {isSignup ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                style={{ cursor: 'pointer' }}
              />
              <label htmlFor="terms" style={{ fontSize: '0.8rem', color: '#64748b', cursor: 'pointer' }}>
                I accept all the <a href="#terms" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>Terms & Conditions</a>
              </label>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <input type="checkbox" id="remember" style={{ cursor: 'pointer' }} />
                <label htmlFor="remember" style={{ fontSize: '0.8rem', color: '#64748b', cursor: 'pointer' }}>Remember me</label>
              </div>
              <a href="#forgot" style={{ fontSize: '0.8rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>Forgot password?</a>
            </div>
          )}

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
            marginTop: '0.5rem'
          }}>
            {isSignup ? "Create Free Account" : "Access Console"}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#64748b', fontSize: '0.85rem' }}>
          {isSignup ? "Already have an account?" : "New to SaaSify?"}{" "}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
            }}
            style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: 700 }}
          >
            {isSignup ? "Sign In" : "Sign Up Now"}
          </span>
        </p>
      </div>
    </div>
  );
}