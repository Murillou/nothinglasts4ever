import { images } from '@/data/merchandise';
import Merchandise from '@/pages/merchandise';
import { render, screen } from '@testing-library/react';

jest.mock('@/data/merchandise', () => ({
  images: Array(12).fill('test-file-stub'),
}));

jest.mock('aos');

describe('Merchandise Page', () => {
  it('deve renderizar todas as imagens com a animação AOS fade-up', () => {
    const { container } = render(<Merchandise />);

    const renderedImages = container.querySelectorAll('div > img');
    expect(renderedImages).toHaveLength(images.length);

    renderedImages.forEach(img => {
      expect(img).toHaveAttribute('data-aos', 'fade-up');
    });
  });
});
