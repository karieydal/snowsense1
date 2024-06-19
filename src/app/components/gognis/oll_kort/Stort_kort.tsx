'use client'

import React, { useEffect, useState  } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import "@/app/styles/kort.css";

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer } from 'react-leaflet';



const markers: LatLngTuple[] = [
        [64.2337, -21.7136],
        [65.6028, -23.9943],
        [65.6278, -23.8019],
        [65.6878, -23.6150],
        [66.0635, -23.5015],
        [66.0618, -23.4858],
        [66.0331, -23.4035],
        [66.1680, -23.2680],
        [66.0750, -23.2620],
        [66.0760, -23.1980],
        [66.0760, -23.1580],
        [66.0720, -22.9985],
        [66.0555, -23.0053],
        [66.1737, -18.9072],
        [66.1329, -18.9830],
        [66.1321, -18.9943],
        [66.1334, -18.9835],
        [66.0640, -18.6331],
        [66.0322, -18.5387],
      
        [65.9930, -18.5800],
        [65.6057, -18.4450],
        [65.7180, -17.6795],
        [65.2560, -14.0450],
        [65.2630, -13.9620],
        [65.1603, -13.7047],
        [65.1646, -13.6674],
        [65.1636, -13.6769],
        [65.0934, -14.0195],
        [64.898045, -23.898045]
];

const popupContents = [
  { text: "Esja, 720mh", imageUrl: "/pictures/kort/esja.jpeg" },
  { text: "Patreksfjörður, Brellur, 290mh ", imageUrl: "/pictures/kort/patro.jpeg" },
  { text: "Tálknafjörður, Geitárhorn, 300mh", imageUrl: "/pictures/kort/talk.jpeg" },
  { text: "Bíldudalur, 350mh", imageUrl: "/pictures/kort/bildu.jpeg" },
  { text: "Flateyri, Innra Bæjargil, 590mh", imageUrl: "/pictures/kort/flat1.jpeg" },
  { text: "Flateyri, Miðhryggsgil, 610mh", imageUrl: "/pictures/kort/flat2.jpeg" },
  { text: "Önundarfj. Selabólsurð, 460mh", imageUrl: "/pictures/kort/sela.jpeg" },
  { text: "Bolungarvík, Traðargil, 540mh", imageUrl: "/pictures/kort/bol.jpeg" },
  { text: "Seljalandsdalur, Kistufell, 600mh", imageUrl: "/pictures/kort/kist.jpeg" },
  { text: "Seljalandsdalur, 550mh", imageUrl: "/pictures/kort/kist.jpeg" },
  { text: "Ísafj. Steiniðjugil, 420mh", imageUrl: "/pictures/kort/stein.jpeg" },
  { text: "Súðavíkurhl. gil 6, 400mh", imageUrl: "/pictures/kort/sud6.jpeg" },
  { text: "Súðavíkurhl. gil 22, 490mh", imageUrl: "/pictures/kort/sud22.jpeg" },
  { text: "Siglufj. S_Miðstrandargil. 320mh", imageUrl: "/pictures/kort/mid.jpeg" },
  { text: "Siglufj. Grashólabrún, 630mh", imageUrl: "/pictures/kort/gras.jpeg" },
  { text: "Siglufj. Illviðrishnjúkur1, 800mh.", imageUrl: "/pictures/kort/ill1.jpeg" },
  { text: "Siglufj. Illviðrishnjúkur2, 850mh.", imageUrl: "/pictures/kort/ill2.jpeg" },
  { text: "Ólafsfjarðarvegur 1, 590mh ", imageUrl: "/pictures/kort/ola1.jpeg" },
  { text: "Ólafsfjarðarvegur 2, 610mh ", imageUrl: "/pictures/kort/ola2.jpeg" },
  {text: "Dalvík, Bæjarfjall, 730mh", imageUrl: "/pictures/kort/baej.jpeg"},
  { text: "Öxnadalur, 1170mh", imageUrl: "/pictures/kort/oxn.jpeg" },
  { text: "Ljósavatnsskarð, 562mh", imageUrl: "/pictures/kort/ljos.jpeg" },
  { text: "Seyðisfj. Bjólfur ,540mh", imageUrl: "/pictures/kort/bjol.jpeg" },
  { text: "Seyðisfj. Strandatindur, 660mh", imageUrl: "/pictures/kort/strand.jpeg" },
  { text: "Neskaupst. Tröllagil, 620mh", imageUrl: "/pictures/kort/troll.jpeg" },
  { text: "Neskaupst. Bakkagil 670mh", imageUrl: "/pictures/kort/bakk.jpeg" },
  { text: "Neskaupst. Nesgil, 670mh", imageUrl: "/pictures/kort/nes.jpeg" },
  { text: "Eskifj. Harðskafi, 570mh", imageUrl: "/pictures/kort/eski.jpeg" },
  { text: "Ólafsvík, 230 mh", imageUrl: "/pictures/kort/eski.jpeg" },
 
];

const customIcon = new L.Icon({
  iconUrl: '/pictures/image2.png', 
  iconSize: [30, 30], 
  iconAnchor: [12.5, 25], 
});

const Stort_kort = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [markersInitialized, setMarkersInitialized] = useState(false); 
  
  
  useEffect(() => {
  
  
    const map = L.map('map').setView([65, -20], 7.4);

    
    const Bakgrunnskort = L.tileLayer('https://geo.vedur.is/geoserver/www/imo_basemap_epsg3857/{z}/{x}/{y}.png', {
      maxZoom: 15,
      minZoom: 5,
    });
    const Ornefni = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png");
    const Hallakort = L.tileLayer('https://geo.vedur.is/geoserver/www/imo_slopemap_epsg3857_v1/{z}/{x}/{y}.png');
    const loftmynd = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

    const baseLayers = {
      "Bakgrunnskort": Bakgrunnskort,
      "loftmynd": loftmynd,
      "Kort með örnefnum": Ornefni, 
    };
    const overlayLayers = {
      "Hallakort": Hallakort,
    };


    Bakgrunnskort.addTo(map);
    L.control.layers(baseLayers, overlayLayers, {
      position: 'topright', 
    }).addTo(map);

   
    
    

    markers.forEach((marker, index) => {
      const popupContent = document.createElement('div');
      const image = document.createElement('img');
      image.src = popupContents[index].imageUrl;
      image.alt = `Image for marker ${index + 1}`;
      image.className = 'popup-image';
      image.onclick = () => handleImageClick(popupContents[index].imageUrl);
      
      const text = document.createElement('p');
      text.textContent = popupContents[index].text;

      popupContent.appendChild(image);
      popupContent.appendChild(text);

      L.marker(marker, { icon: customIcon })
        .bindPopup(popupContent, { className: 'custom-popup-container' })
        .addTo(map); // Add markers directly to map
        
    });

    Bakgrunnskort.addTo(map);


    return () => {
      map.remove();
    };
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); // Prevent modal click from closing it
  };


  return (
    <div>
      <div style={{ position: "absolute", height: "100vh", width: "99.5vw", maxHeight:"1000px",  display: "flex",
   }}>
      <div id="map" style={{ height: '100%', width: '100%', paddingTop: "800px", top: "1000px" }}></div>
        <div>
          <img
            className='absolute z-[1000] w-[300px] top-[1800px] right-[16px]'
            src='https://geo.vedur.is/geoserver/www/imo_slopemap_epsg3857_v1/Legend_box_v1.png'
            alt=''
          />
        </div>
        {showModal && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImageUrl} className="modal-image" alt="Enlarged Image" />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Stort_kort;