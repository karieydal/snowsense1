"use client";

import "@/app/styles/langen.css";

function Datalang() {
    return(
    
    <nav>
            <div class="lang-menu">
                <div class="selected-lang">
                    ENG
                </div>
                <ul>
                    <li>
                        <a href="/gogn" class="ie">ICE</a>
                    </li>
                    <li>
                        <a href="/" class="no">NOR</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
        
export default Datalang; 