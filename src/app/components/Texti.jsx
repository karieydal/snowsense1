import React from "react";
import  "@/app/styles/texti.css";
import { pdfjs } from "react-pdf";
import { FaArrowRight } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 



function Texti(){
    return(
        <div>
            <h1 class="snowsense-is" >snowsense.is</h1>
            
            <a href="/gogn" class="custom-button">
                Fara yfir á gagnasíðu <FaArrowRight className="ml-2"/></a>
            
                <div class="row"> 
                    <section class="about">
                       
                    <div class="about-content" className="pr-[20px] ">
                    <h2  className="text-[40px] font-bold text-black">Um fyrirtækið
                                </h2>
                               <p className="text-[20px] leading-[1.5] mr-[20px]">
                                    POLS Engineering var stofnað árið 2004
                                    og fyrirtækið hefur þróað snjódýptarmæla
                                    síðan þá. 
                                </p>
                                <a href="snowsense/umfyrirtaekid" class="read-more">Lesa meira</a>
                       </div> 
                       
                        <div class="about-image">
                       <img src= "./pictures/pols_logo_800.jpg"alt="" />
                        </div>
                 </section>
         </div> 
         
         <div class="row"> 
                    <section class="about">
                        <div class="about-image">
                         <img src= "./pictures/G1TQbFSg.jpeg"alt="" />
                        </div>
                        <div class="about-content" className="pr-[50px]">
                                <h2 className="text-[40px] font-bold text-black mb-[20px]">Um tækin</h2>
                                <p  className="text-[20px] leading-[1.5]">  Snjómælirinn SM4 byggist á einfaldri hugmynd. Röð hitaskynjara er 
                                    komið fyrir á 20cm fresti sem fest er á yfirborð jarðar. 
                                    Mælingarnar eru skráðar með nokkurra mínútna millibili og síðan 
                                    sendar reglulega til miðlægrar tölvu í gegnum GSM kerfi. Öll gögnin eru
                                    birt hér á vefsíðunni. 
                                </p>
                                <a href="snowsense/umtaekin" class="read-more">Lesa meira</a>
                       </div>  </section> </div>
                       
                       
                <div class="row"> 
                    <section class="about">
                        <div class="about-content" className="pr-[50px] ">
                                <h2 className="text-[40px] font-bold text-black mb-[20px]">Sjómælar</h2>
                                <p  className="text-[20px] leading-[1.5] mr-[20px]"> POLS hefur síðustu ár verið að þróa sjómæla sem mæla hitastigið í sjónum.
                                    Mælunum er komið við kví... 
                                </p>
                                <a href="" class="read-more-2">Lesa meira</a>
                       </div> 
                       <div class="about-image">
                         <img src="./pictures/sjomælir.jpeg" alt="" />
                        </div>
                 </section>
            </div>

         <div class="row"> 
                    <section class="about">
                        <div class="about-image">
                         <img src="./pictures/hitagraf.png" alt="" />
                        </div>
                        <div class="about-content" className="pr-[50px] mr-[20px] ">
                        <h2 className="text-[40px] font-bold text-black mb-[20px]">Að lesa á gröfin</h2>
                        <p  className="text-[20px] leading-[1.5]"> 
                                    Það getur verið flókið að lesa á upplýsingarnar sem
                                    SM4 mælarnir senda frá sér 
                                </p>
                                <a href="" class="read-more">Lesa meira</a>
                       </div> 
                 </section>
         </div>
        

         <div class="row"> 
                    <section class="about">
                       
                    <div class="about-content" className="pr-[50px] ">
                    <h2 className="text-[40px] font-bold text-black mb-[20px]">Sérsmíðaðir mælar</h2>
                    <p  className="text-[20px] leading-[1.5] mr-[20px]"> Ef það er áhugi að þá er hægt að láta sérsníða mæla en þá þarf að hafa samband í gegnum tölvupóst eða símanúmer...
                                </p>
                                <a href="" class="read-more">Lesa meira</a>
                       </div>  
                       
                       <div class="about-image">
                         <img src="./pictures/flateyri.jpg" alt="" />
                        </div>
                 </section> 

                 
                 
                

                 
                 </div>
                 <div className="pt-[100px]">
                    
              <div className="min-w-full bg-white h-[500px] flex flex-col items-center justify-center p-[20px]">
  <h6 className="text-[50px] mb-4">Hér sérður myndbönd um okkar starfsemi</h6>
  <img className="max-w-full max-h-full" src="/pictures/video.png" alt="Video" />
</div>
                </div>

        </div>
    );
}
export default Texti;
