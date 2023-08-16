interface GreetProps {
    text: string;
}

export default function Greet({ text }: GreetProps) {
    return <div>{text}</div>;
}
