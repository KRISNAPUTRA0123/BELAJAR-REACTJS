import { useEffect } from "react";

export default function Home(){
    useEffect(function() {
        document.title = 'Home';
    }, []);

    return (
    <section className='section'>
        <h1 className='section-title'>Selamat datang di website Projek ReactJS</h1>
        <p className='section-description'>Website ini dibuat oleh <i><b>KRISNA</b>PUTRA</i></p>
    </section>
    );
}