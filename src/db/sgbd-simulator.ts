'use server'
import fs from 'node:fs'
import users from './user'

const filePath = './src/db/user.ts'
//fake function to simulate a database
export const goFs = () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      return
    }
    console.log('File content:', data)
  })
}

export const selectUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  goFs()
  console.log('User:', users)
  return users
}
