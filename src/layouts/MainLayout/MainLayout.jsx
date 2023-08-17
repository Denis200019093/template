import {ReactNode} from "react";
import Header from "../../components/Header/index.js";

import './MainLayout.scss'


const MainLayout = ({children}) => {
    return (
        <main className='main'>
            <div className='test'>
                <Header/>
                {children}
            </div>
        </main>
    )
}

export default MainLayout;