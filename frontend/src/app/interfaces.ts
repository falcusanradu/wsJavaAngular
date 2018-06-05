export const SESSION_USER = 'user';

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
}
