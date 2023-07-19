import React from 'react'
import { AddTodo } from './components/AddTodo'
import { Todos } from './components/Todos'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}
