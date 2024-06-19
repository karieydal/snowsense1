'use client'
import "@/app/styles/gallery.css";
import React, { useState } from "react";

const Imagesno = () => {
    const [previewSrc, setPreviewSrc] = useState(null);

    const handleImageClick = (src) => {
        setPreviewSrc(src);
    };

    const closePreview = (e) => {
        if (e.target.className === 'image-preview' || e.target.className === 'preview active') {
            setPreviewSrc(null);
        }
    };

    return (
        <div>
            <h5 className="myndir">Myndir</h5>
            <div className="container">
                <div className="gallery">
                    <div className="image">
                        <img src="../pictures/gallery/mynd2.jpeg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd2.jpeg')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd3.jpeg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd3.jpeg')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd1.jpeg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd1.jpeg')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd4.jpeg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd4.jpeg')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd5.jpg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd5.jpg')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd6.jpg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd6.jpg')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd7.png" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd7.png')} />
                    </div>
                    <div className="image">
                        <img src="../pictures/gallery/mynd8.jpg" alt="" onClick={() => handleImageClick('../pictures/gallery/mynd8.jpg')} />
                    </div>
                </div>
            </div>

            {previewSrc && (
                <div className="image-preview" onClick={closePreview}>
                    <div className="preview active">
                        <img src={previewSrc} alt="" />
                        <h6>Flateyri, gil 6</h6>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Imagesno;