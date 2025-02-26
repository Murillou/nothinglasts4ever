import AboutMe from '@/pages/aboutme';
import { render, screen } from '@testing-library/react';
import AOS from 'aos';

jest.mock('aos');

describe('AboutMe Page', () => {
  it('deve renderizar o título corretamente', () => {
    render(<AboutMe />);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('deve renderizar o texto de descrição', () => {
    render(<AboutMe />);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it('deve aplicar a classe AOS corretamente', () => {
    const { container } = render(<AboutMe />);

    window.scrollTo(0, 100);
    AOS.refresh();

    const animatedElement = container.querySelector('div');
    expect(animatedElement).toBeInTheDocument();

    if (animatedElement) {
      expect(animatedElement).toHaveAttribute('data-aos', 'fade-in');
    }
  });
});
