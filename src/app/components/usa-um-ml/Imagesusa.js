import "@/app/styles/gallery.css";


const Images = () =>{
    return(
        
        
        <div><h5 class="myndir">Myndir</h5>
        

        <div class="container">

            
            <div class="gallery">
            <div class image><img src="./pictures/gallery/mynd2.jpeg" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd3.jpeg" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd1.jpeg" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd4.jpeg" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd5.jpg" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd6.jpg" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd7.png" alt=""/></div>
            <div class image><img src="./pictures/gallery/mynd8.jpg" alt=""/></div>
            </div>

            <div className="popup-image">
                <span>&times;</span>

                
                    <img src="./pictures/gallery/mynd2.jpeg" alt=""/>
                
                
            </div>
        </div>
        </div>

        

    )
}

export default Images; 

