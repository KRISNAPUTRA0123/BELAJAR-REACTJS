import { useEffect } from "react";

export default function Profile(){
    useEffect(function() {
        document.title = 'Profile';
    }, []);

    return (
    <section className='section'>
        <h1 className='section-title'>Profile Page</h1>
        <p className='section-description'>Perkenalkan Nama saya Krisna Putra Nur Qodri, sekarang saya bersekolah di UNIKAMA</p>
        <p className='section-description'> Salam Kenal Semuanya</p>
    </section>
    );
}