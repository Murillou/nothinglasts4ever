import { images } from '@/data/home';
import Home from '@/pages';
import { render } from '@testing-library/react';

function generateMockImages(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    src: `test-image-${index + 1}`,
    alt: `Image ${index + 1}`,
  }));
}

jest.mock('@/data/home', () => ({
  images: generateMockImages(13),
}));

describe('Home Page', () => {
  it('deve renderizar todas as imagens com a classe da animação AOS', () => {
    const { container } = render(<Home />);

    const renderedImages = container.querySelectorAll('div > img');
    expect(renderedImages).toHaveLength(images.length);

    renderedImages.forEach(img => {
      expect(img).toHaveAttribute('data-aos', 'fade-up');
    });
  });
});
