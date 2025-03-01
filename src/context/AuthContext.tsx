import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  isLoggedIn: boolean;
  profileStatus: 'active' | 'inactive';
  role: 'patient' | 'doctor';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role: 'patient' | 'doctor') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: 'patient' | 'doctor') => {
    setUser({
      email,
      isLoggedIn: true,
      profileStatus: 'active',
      role
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
