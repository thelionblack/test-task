import React from 'react';
import '@/assets/styles/index.css'
import Logo from "@/components/Logo";

const App = () => {
    return (
        <div className='block'>
            <div className='block__element--top'>
                <div>
                    <Logo />
                </div>
            </div>
            <div className='block__element--bottom'>
                <p className='currency__title'>

                </p>
            </div>
        </div>
    );
};

export default App;