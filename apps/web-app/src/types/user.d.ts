export interface User {
  id: string | number
  name: string
  phone: string
  isPinSet: boolean
}

export type Contact = Omit<User, "isPinSet">
