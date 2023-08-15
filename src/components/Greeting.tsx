import { useState, MouseEventHandler } from 'react';

const defaultGreeting = "It's nice to meet you!";

export default function Greeting() {
    const [customGreeting, setCustomGreeting] = useState<string | null>(null),
        handleCustomGreeting: MouseEventHandler<HTMLButtonElement> = e => {
            if (customGreeting && customGreeting.length > 0)
                setCustomGreeting(customGreeting);
            else setCustomGreeting(null);
        };

    return (
        <div>
            <h2>Hello World!</h2>
            {!customGreeting && <p>{defaultGreeting}</p>}
            {customGreeting && <p>{customGreeting}</p>}
            <input
                value={customGreeting || ''}
                type='text'
                placeholder='Enter custom greeting'
                onChange={e => setCustomGreeting(e.target.value)}
            />
            <button onClick={handleCustomGreeting}>Set custom greeting</button>
        </div>
    );
}
