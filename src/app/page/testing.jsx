"use client"
import React, { useState, useRef } from 'react';

export default function Testing(){
    const modalRef = useRef(null);
    const openModal = () => {
        console.log(modalRef.current)
        modalRef.current.showModal();
    };

    const closeModal = () => {
        modalRef.current.close();
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <button className="btn" onClick={openModal}>open modal</button>
            <dialog  ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </main>
    );
}