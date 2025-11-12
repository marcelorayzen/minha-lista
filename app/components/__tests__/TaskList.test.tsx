import { render, screen, fireEvent } from '@testing-library/react'
import TaskList from '../TaskList'

test('add task flow', () => {
  render(<TaskList />)
  const title = screen.getByPlaceholderText(/Título da tarefa/i)
  fireEvent.change(title, { target: { value: 'Comprar leite' } })
  fireEvent.click(screen.getByText(/Adicionar tarefa/i))
  expect(screen.getByText('Comprar leite')).toBeInTheDocument()
})
