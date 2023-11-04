import React from "react";
import {useEffect} from 'react';
import "./_PdfTest1.scss"

export default function PdfTest() {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            var the_element = entry.target.children[0]
            //var the_element = entry.target
            the_element.classList.toggle("show", entry.isIntersecting)
        })
    },{
        root: document.querySelector(".card-container"),
        threshold: 1,
    })

    useEffect(() => {
        const cards = document.querySelectorAll(".container-inv")
        //const cards = document.querySelectorAll(".card")

        cards.forEach(card =>{            
            observer.observe(card)
        })
    }, []);

    return(
        <div className="card-container">
            <div className="container-inv">
                <div className="card">This is the first card</div>
            </div>
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>            
            <div className="container-inv">
                <div className="card">This is a card</div>
            </div>
            <div className="container-inv">
                <div className="card">This is the last card</div>
            </div>
        </div>
    );
}
