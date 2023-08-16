import { useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
}

export default function Async() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post: Post) => (
                    <li
                        key={post.id}
                        style={{
                            textAlign: 'left',
                            fontSize: 14,
                            textTransform: 'capitalize',
                        }}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
