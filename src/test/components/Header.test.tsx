import Header from '@/components/Header/Header';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

jest.mock('aos', () => ({
  init: jest.fn(),
}));

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('deve renderizar o título corretamente', () => {
    const title = screen.getByText(/nothinglasts4ever/i);
    expect(title).toBeInTheDocument();
  });

  it('deve renderizar os links do menu', () => {
    expect(screen.getByText(/Album Artwork/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal Work/i)).toBeInTheDocument();
    expect(screen.getByText(/Merchandise/i)).toBeInTheDocument();
    expect(screen.getByText(/About me/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('deve abrir o menu ao clicar no ícone de menu', () => {
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const menuItem = screen.getByTestId('close-button');
    expect(menuItem).toBeInTheDocument();
  });

  it('deve fechar o menu ao clicar no ícone de fechar', async () => {
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByTestId('close-button')).not.toBeInTheDocument();
    });
  });
});
