import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterOutput() {

    const counter = useSelector((state) => state.counter); // Ye fucntion state ko value deta hay

    // For Multiple Values
    const obj = useSelector((state) => ({
        counter: state.counter,
        name: state.name
    }));
    console.log("Whats come : ", obj);

    return (
        <>
            Counter Value: {counter}
        </>
    )
}
