import { images } from '@/data/albumArtwork';
import AlbumArtworkPage from '@/pages/albumartwork';
import { render } from '@testing-library/react';

jest.mock('@/data/albumArtwork', () => ({
  images: Array(12).fill('test-file-stub'),
}));

describe('Album Artwork Page', () => {
  it('deve renderizar todas as imagens com classe AOS fade-up', () => {
    const { container } = render(<AlbumArtworkPage />);

    const renderedImages = container.querySelectorAll('div > img');
    expect(renderedImages).toHaveLength(images.length);

    renderedImages.forEach(img => {
      expect(img).toHaveAttribute('data-aos', 'fade-up');
    });
  });
});
