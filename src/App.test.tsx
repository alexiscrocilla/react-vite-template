import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('affiche le titre et le paragraphe', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /react \+ vite/i })).toBeInTheDocument()
    expect(screen.getByText(/template de base pour le développement/i)).toBeInTheDocument()
  })
})
