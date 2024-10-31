'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClickPlus() {
        setLikes(likes + 1);
    }

    function handleClickLess() {
        if (likes <= 0) return;
        setLikes(likes - 1);
    }

    return (
        <>
            <p>{likes}</p>
            <button onClick={handleClickLess}>-</button>
            <button onClick={handleClickPlus}>+</button>
        </>
    );
}
