import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Designer from '../Designer';

// Mocking child components
vi.mock('../../Helper/SectionHeading', () => ({
  default: ({ children }) => <h2>{children}</h2>,
}));

vi.mock('../DesginerCard', () => ({
  default: () => <div data-testid="designer-card">Designer Card</div>,
}));

vi.mock('../Showcase', () => ({
  default: () => <div data-testid="showcase">Showcase Component</div>,
}));

describe('Designer Component', () => {
  afterEach(() => {
    cleanup();
  })
  it('renders without crashing', () => {
    render(<Designer />);
    expect(screen.getByText('3D design')).toBeInTheDocument(); // Test SectionHeading
  });

  it('renders the DesginerCard component', () => {
    render(<Designer />);
    expect(screen.getByTestId('designer-card')).toBeInTheDocument(); // Test DesginerCard
  });

  it('renders the Showcase component', () => {
    render(<Designer />);
    expect(screen.getByTestId('showcase')).toBeInTheDocument(); // Test Showcase
  });

  it('applies the correct styles to the container', () => {
    render(<Designer />);
    const container = screen.getByTestId('designer-container');
    expect(container).toHaveClass('pt-40', 'pb-10', 'bg-[#050709]', 'md:h-[88vh]');
  });
});
