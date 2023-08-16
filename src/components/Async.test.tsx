import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('Renders posts if request succeeds', async () => {
        // This will create the mock API call and then use it instead the actual request inside the component
        window.fetch = jest.fn();
        (window.fetch as jest.Mock<any, any>).mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem'); // findAllByRole returns a promise
        expect(listItemElements).not.toHaveLength(0);
    });
});
