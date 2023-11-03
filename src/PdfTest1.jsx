import React from "react";
import {useRef, useEffect} from 'react';
import "./_PdfTest1.scss"

export default function PdfText() {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },{
        threshold: 0.5
    })

    useEffect(() => {
        const cards = document.querySelectorAll(".card")
        
        cards.forEach(card =>{            
            observer.observe(card)
        })
    }, []);

    return(
        <div className="card-container">
            <div className="card">This is the first card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is a card</div>
            <div className="card">This is the last card</div>
        </div>
    );
}
