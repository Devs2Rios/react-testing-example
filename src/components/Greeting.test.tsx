import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// Testing suites are groups of related tests and start use the describe() function to group the tests:
describe("Greeting component", () => {
    // test() is globally available
    test('Renders "Hello World"', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // ...
        // Assert
        const helloWorldElement = screen.getByText(/Hello World/i);
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('Has a greeting"', () => {
        render(<Greeting />);
        const greetingParagraph = screen.getByText(/nice to meet you/i);
        expect(greetingParagraph).toBeInTheDocument();
    });
});

/*
PASS  src/components/Greeting.test.tsx
Greeting component
✓ Renders "Hello World" (25 ms)
✓ Has a greeting" (3 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.716 s
Ran all test suites related to changed files.
*/
