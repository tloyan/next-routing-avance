export interface User {
  id: number
  name: string
  avatar: string
  role: 'admin' | 'user'
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    role: 'user',
  },
  // Ajoutez d'autres utilisateurs ici...
]

export default users
