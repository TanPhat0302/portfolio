import { describe, it, expect, vi, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import DesginerCard from '../DesginerCard';

// Mock data for tests
vi.mock('../../../../Data/data', () => ({
  BaseInfo: {
    profilePic: '/mock-profile-pic.jpg',
    name: 'Mock Artist',
  },
  model: {
    proj: [
      { img: '/mock-img1.jpg', link: 'https://example.com/project1' },
      { img: '/mock-img2.jpg', link: 'https://example.com/project2' },
    ],
  },
}));

vi.mock('../../../Helper/ModelCard', () => ({
  default: ({ children }) => <div data-testid="model-card">{children}</div>,
}));

vi.mock('next/image', () => ({
  default: ({ src, alt, width, height, className }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  ),
}));

describe('DesginerCard Component', () => {
  afterEach(() => {
    cleanup();
  })
  it('renders without crashing', () => {
    render(<DesginerCard />);
    expect(screen.getByText('3D Project Model')).toBeInTheDocument(); // Heading exists
  });

  it('renders all project models correctly', () => {
    render(<DesginerCard />);
    const modelCards = screen.getAllByTestId('model-card');
    expect(modelCards).toHaveLength(2); // Two projects in mock data
  });

  it('renders profile picture and artist name', () => {
    render(<DesginerCard />);
    expect(screen.getByAltText('Mock Artist')).toBeInTheDocument(); // Profile pic exists
    expect(screen.getByText('Featured Artist')).toBeInTheDocument(); // Artist name exists
  });

  it('renders project links with correct hrefs', () => {
    render(<DesginerCard />);
    const projectLinks = screen.getAllByRole('link');
    expect(projectLinks).toHaveLength(2); // Two links
    expect(projectLinks[0]).toHaveAttribute('href', 'https://example.com/project1');
    expect(projectLinks[1]).toHaveAttribute('href', 'https://example.com/project2');
  });

  it('applies the correct class styles', () => {
    render(<DesginerCard />);
    const heading = screen.getByText('3D Project Model');
    expect(heading).toHaveClass('text-white', 'text-xl', 'font-semibold'); // Test heading styles
  });
});
