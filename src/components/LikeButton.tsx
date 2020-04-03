import React, { useState, useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition';
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    // Ref 在所有 render 里面都保持着唯一的引用
    // 因此对 ref 的取值和赋值都是最终的状态
    // 而不会在不同的 render 之间存在一定的隔离
    // 修改 ref 的值，并不会诱发 render
    const likeRef = useRef(0);
    const didMountRef = useRef(false);
    const domRef = useRef<HTMLInputElement>(null);
    const [on, setOn] = useState(true);
    const positions = useMousePosition();
    useEffect(() => {
        console.log('document title effect is running')
        document.title = `clicked ${like}`;
    }, [like])
    useEffect(() => {
        if (didMountRef.current) {
            // 再次进来后， 就变成了 updated
            console.log('this is updated')
        } else {
            // 第一次设置为 true
            didMountRef.current = true;
        }
    })
    useEffect(() => {
        if (domRef && domRef.current) {
            domRef.current.focus();
        }
    })
    function handleAlterClick() {
        setTimeout(() => {
            alert(`you clicked on ${likeRef.current}`);
        }, 3000)
    }
    return (
        <>
        <input type="text" ref={domRef} />
         <h2>X: {positions.x}, Y: {positions.y}</h2>
        <button onClick={() => {setLike(like + 1); likeRef.current++}}>
            {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF'} 👍
        </button>
        <button onClick={handleAlterClick}>
            Alert!
        </button>
        </>
    )
}

export default LikeButton;