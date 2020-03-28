import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({x: 0, y:0})
    useEffect(() => {
        console.log('add effect', positions.x);
        const updateMouse = (e: MouseEvent) => {
            //console.log('inner');
            setPositions({ x: e.clientX, y: e.clientY});
        }
        document.addEventListener('click', updateMouse);
        // 当 Effect 返回的是一个函数，则可以清除 event
        return () => {
            console.log('remove effect', positions.x)
            document.removeEventListener('click', updateMouse);
        }
    },[]); //[] 可以使得每次在挂载和卸载的时候添加/删除事件，而非每次渲染的时候

    console.log('before render', positions.x);
    return (
    <p>X: {positions.x}, Y: {positions.y}</p>
    )
}

export default MouseTracker;