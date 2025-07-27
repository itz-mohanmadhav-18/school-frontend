export interface User {
  _id: string;
  email: string;
  role: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role?: string,sessionHours?: number) => void;
  logout: () => void;
  isLoading: boolean;
  isLoggingOut:boolean;
}