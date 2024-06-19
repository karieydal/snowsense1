"use client";

import "@/app/styles/langen.css";

function Langen() {
    return(
    
    <nav>
            <div class="lang-menu">
                <div class="selected-lang">
                    ENG
                </div>
                <ul>
                    <li>
                        <a href="/snowsense" class="ie">ICE</a>
                    </li>
                    <li>
                        <a href="/norge" class="no">NOR</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
        
export default Langen; 