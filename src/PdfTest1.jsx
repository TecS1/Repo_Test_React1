import React from "react";
import {useEffect} from 'react';
import "./_PdfTest1.scss"

export default function PdfTest() {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            //var the_element = entry.target.children[0]
            if (entry.isIntersecting) {
                console.log("Se ve o intersecta xD: " + entry.target.children[0]);
                entry.target.children[0].classList.add("show")
                observer.unobserve(entry.target)
            }else{
                entry.target.children[0].classList.remove("show")                
            }
            //var the_element = entry.target
            //the_element.classList.toggle("show", entry.isIntersecting)
            //entry.target.children[0].classList.toggle("show", entry.isIntersecting)
        })
    },{
        root: document.querySelector(".card-container"),        
        threshold: 0.5,
    })

    useEffect(() => {
        const cards = document.querySelectorAll(".container-inv")
        //const cards = document.querySelectorAll(".card")

        cards.forEach(card =>{            
            observer.observe(card)
        })
        //observer.root.style.border = "2px solid #44aa44";
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
