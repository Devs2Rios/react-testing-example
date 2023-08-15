import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';
import { act } from 'react-dom/test-utils';

// Testing suites are groups of related tests and start use the describe() function to group the tests:
describe('Greeting component', () => {
    // test() is globally available
    test('Renders "Hello World"', () => {
        // Arrange
        render(<Greeting />);
        // Assert
        const helloWorldElement = screen.getByText(/Hello World/i);
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('Has a greeting', () => {
        render(<Greeting />);
        const greetingParagraph = screen.getByText(/nice to meet you/i);
        expect(greetingParagraph).toBeInTheDocument();
    });
    test('Greeting has changed', () => {
        render(<Greeting />);
        const newGreeting = 'Good to see you again';
        const customGreetingInput = screen.getByPlaceholderText(
            'Enter custom greeting'
        );
        const greetingParagraph = screen.getByText(/nice to meet you/i);
        expect(greetingParagraph).toBeInTheDocument();
        const setCustomGreetingButton = screen.getByRole('button');
        // Act
        fireEvent.change(customGreetingInput, {
            target: { value: newGreeting },
        });
        act(() => setCustomGreetingButton.click());
        // Assert
        const customGreetingParagraph = screen.getByText(newGreeting);
        expect(greetingParagraph).not.toBeInTheDocument();
        expect(customGreetingParagraph).toBeInTheDocument();
    });
});
