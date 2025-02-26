import { images } from '@/data/personalWork';
import PersonalWork from '@/pages/personalwork';
import { screen, render } from '@testing-library/react';

jest.mock('@/data/personalWork', () => ({
  images: Array(12).fill('test-file-stub'),
}));

describe('Personal Work Page', () => {
  it('deve renderizar as imagens com a classe AOS fade-up', () => {
    const { container } = render(<PersonalWork />);

    const renderedImages = container.querySelectorAll('div > img');
    expect(renderedImages).toHaveLength(images.length);

    renderedImages.forEach(img => {
      expect(img).toHaveAttribute('data-aos', 'fade-up');
    });
  });
});
