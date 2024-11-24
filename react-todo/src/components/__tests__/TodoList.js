import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Todo: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add Task</button>
            <button onClick={() => setCount(count - 1)}>Remove Task</button>
        </div>
    );
};

export default Counter;