import { BrowserRouter } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import Home from './home.jsx';


// Helper wrapper for components using <Link>
function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("Home Component", () => {

  test("renders the main heading", () => {
    renderWithRouter(<Home />);

    const heading = screen.getByRole("heading", { name: /welcome to my portfolio/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders introduction paragraph", () => {
    renderWithRouter(<Home />);

    const intro = screen.getByText(/Hi, I am Michelle Amosah/i);
    expect(intro).toBeInTheDocument();
  });

  test("renders mission statement section", () => {
    renderWithRouter(<Home />);

    const mission = screen.getByText(/mission statement/i);
    expect(mission).toBeInTheDocument();
  });

  test("renders the About Me link button", () => {
    renderWithRouter(<Home />);

    const aboutButton = screen.getByRole("link", { name: /learn more about me/i });
    expect(aboutButton).toBeInTheDocument();
    expect(aboutButton).toHaveAttribute("href", "/about");
  });

});


// describe('Home Component', () => {
//   test('renders welcome message', () => {
//     render(<Home />);});
//     const welcomeElement = screen.getByText(/Welcome to My Portfolio/i);
//     expect(welcomeElement).toBeInTheDocument();
// });