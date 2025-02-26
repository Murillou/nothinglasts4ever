import Contact from '@/pages/contact';
import { render, screen } from '@testing-library/react';
import AOS from 'aos';

jest.mock('aos');

describe('Contact Page', () => {
  it('deve renderizar o título "Contact Me"', () => {
    render(<Contact />);

    expect(screen.getByText('Contact me')).toBeInTheDocument();
  });

  it('deve renderizar as informações de contato', () => {
    render(<Contact />);
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Instagram:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone:/i)).toBeInTheDocument();
  });

  it('deve aplicar a classe AOS', () => {
    const { container } = render(<Contact />);

    const animatedElement = container.querySelector('div');
    expect(animatedElement).toBeInTheDocument();

    if (animatedElement) {
      expect(animatedElement).toHaveAttribute('data-aos', 'fade-in');
    }
  });
});
