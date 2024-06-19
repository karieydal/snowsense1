import React from "react";
import  "@/app/styles/texti.css";
import { Document, Page, pdfjs } from "react-pdf";
import { IoArrowForwardOutline } from "react-icons/io5";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 


function Texti(){
    return(
        <div>
            <h1 class="snowsense-is" >snowsense.is</h1>
            
            
        
                <div class="row"> 
                    <section class="about">
                        <div class="about-image">
                         <img src= "../pictures/pols_logo_800.jpg"alt="" />
                        </div>
                        <div class="about-content">
                                <h2>Um fyrirtækið
                                </h2>
                                <p> 
                                    POLS Engineering var stofnað árið 2004
                                    og fyrirtækið hefur þróað snjódýptarmæla
                                    síðan þá. 
                                </p>
                                <a href="snowsense/snjodyptarmaelar" class="read-more">Lesa meira</a>
                       </div> 
                 </section>
         </div> 
         
         <div class="row"> 
                    <section class="about">
                        <div class="about-image">
                         <img src= "../pictures/G1TQbFSg.jpeg"alt="" />
                        </div>
                        <div class="about-content">
                                <h2>Um tækin</h2>
                                <p> Snjómælirinn SM4 byggist á einfaldri hugmynd. Röð hitaskynjara er 
                                    komið fyrir á 20cm fresti sem fest er á yfirborð jarðar. 
                                    Mælingarnar eru skráðar með nokkurra mínútna millibili og síðan 
                                    sendar reglulega til miðlægrar tölvu í gegnum GSM kerfi. 
                                </p>
                                <a href="snowsense/umtaekin" class="read-more">Lesa meira</a>
                       </div>  </section> </div>

         <div class="row"> 
                    <section class="about">
                        <div class="about-image">
                         <img src="../pictures/hitagraf.png" alt="" />
                        </div>
                        <div class="about-content">
                                <h2>Að lesa á gröfin</h2>
                                <p> 
                                    Það getur verið flókið að lesa á upplýsingarnar sem
                                    SM4 mælarnir senda frá sér 
                                </p>
                                <a href="" class="read-more">Lesa meira</a>
                       </div> 

                 </section>
         </div>


         <div class="row"> 
                    <section class="about">
                        <div class="about-image">
                         <img src="../pictures/flateyri.jpg" alt="" />
                        </div>
                        <div class="about-content">
                                <h2>Sérsníðaðir mælar</h2>
                                <p> Ef það er áhugi að þá er hægt að láta sérsníða mæla.
                                </p>
                                <a href="" class="read-more">Lesa meira</a>
                       </div> 
                 </section>
         


        
                




                 <div class="greinarpdf">
                    <h3>Greinar og fyrirlestrar: </h3>
                    <p><a href="" download="sm4_snjomaelingar_sit2018_harpa[319].pdf">PDF snjómælingar 2018 fyrirlestur</a> </p>
                        <p><a href="" download="sm4_visindaport_2016.pdf">PDF SM4 vísindaport 2016</a></p>
                        <a href="" download="SM4_egilsstadir_mar2008.pdf">PDF Egilstaðir fyrirlestur 2008</a>
                 </div>
         </div>
        </div>
    );
}
export default Texti;
