type SuperAdmin = 'super-admin';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | SuperAdmin;
}

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  role: 'super-admin',
};
