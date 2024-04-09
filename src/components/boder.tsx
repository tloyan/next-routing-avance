import React from 'react'

type BorderProps = {
  children: React.ReactNode
  color:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'black'
    | 'white'
}

export default function Border({children, color}: BorderProps) {
  console.log('color', color)
  return (
    <div
      className={`text-l m-4 rounded-lg border border-dashed border-${color}-500 p-2 transition-opacity duration-500 hover:opacity-40`}
    >
      {children}
    </div>
  )
}
