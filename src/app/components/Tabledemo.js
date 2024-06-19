

function Tabledemo() {
  const data1  = [
      {
          location: "Flateyri, Innra Bæjargil, 590mh",
          time: "27.05.2024 15:00",
          temperature: "12.8",
          snd: "50",
          wind: "100",
          cm12: "17",
          cm24: "20",
          mtp: "0@27",
          atp: "0@30"
      },
      {
          location: "Patreksfjörður, Brellur, 290mh",
          time: "27.05.2024 15:00",
          temperature: "20",
          snd: "50",
          wind: "100",
          cm12: "56",
          cm24: "20",
          mtp: "0@29",
          atp: "0@30"
      },
      
      {
        location: "Tálknafjörður, Geitárhorn, 300mh",
        time: "27.05.2024 15:00",
        temperature: "20",
        snd: "50",
        wind: "100",
        cm12: "56",
        cm24: "20",
        mtp: "0@29",
        atp: "0@30"
    },

    {
      location: "Bíldudalur, 350mh",
      time: "27.05.2024 15:00",
      temperature: "20",
      snd: "50",
      wind: "100",
      cm12: "56",
      cm24: "20",
      mtp: "0@29",
      atp: "0@30"
  },

  {
    location: "Flateyri, Miðhryggsgil, 610mh",
    time: "27.05.2024 15:00",
    temperature: "20",
    snd: "50",
    wind: "100",
    cm12: "56",
    cm24: "20",
    mtp: "0@29",
    atp: "0@30"
},

{
  location: "Önundarfj. Selabólsurð, 460mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},

{
  location: "Bolungarvík, Traðargil, 540mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},


{
  location: "Seljalandsdalur, Kistufell, 600mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},

{
  location: "Seljalandsdalur, 550mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},

{
  location: "Ísafj. Steiniðjugil, 420mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},

{
  location: "Súðavíkurhl. gil 6, 400mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},

{
  location: "Súðavíkurhl. gil 22, 490mh",
  time: "27.05.2024 15:00",
  temperature: "20",
  snd: "50",
  wind: "100",
  cm12: "56",
  cm24: "20",
  mtp: "0@29",
  atp: "0@30"
},
 ];







 const data2 = [
  {
      location: "Siglufj. S_Miðstrandargil. 320mh",
      time: "28.05.2024 10:00",
      temperature: "15",
      snd: "30",
      wind: "80",
      cm12: "10",
      cm24: "15",
      mtp: "0@25",
      atp: "0@28"
  },
  {
      location: "Siglufj. Grashólabrún, 630mh",
      time: "28.05.2024 10:00",
      temperature: "13",
      snd: "40",
      wind: "90",
      cm12: "12",
      cm24: "18",
      mtp: "0@27",
      atp: "0@29"
  },
  
  {
    location: "Siglufj. Illviðrishnjúkur1, 800mh",
    time: "28.05.2024 10:00",
    temperature: "13",
    snd: "40",
    wind: "90",
    cm12: "12",
    cm24: "18",
    mtp: "0@27",
    atp: "0@29"
},


{
  location: "Ólafsfjarðarvegur 1, 590mh",
  time: "28.05.2024 10:00",
  temperature: "13",
  snd: "40",
  wind: "90",
  cm12: "12",
  cm24: "18",
  mtp: "0@27",
  atp: "0@29"
},

{
  location: "Ólafsfjarðarvegur 2, 610mh",
  time: "28.05.2024 10:00",
  temperature: "13",
  snd: "40",
  wind: "90",
  cm12: "12",
  cm24: "18",
  mtp: "0@27",
  atp: "0@29"
},

{
  location: "Dalvík, Bæjarfjall, 730mh",
  time: "28.05.2024 10:00",
  temperature: "13",
  snd: "40",
  wind: "90",
  cm12: "12",
  cm24: "18",
  mtp: "0@27",
  atp: "0@29"
},

];

 
return (
  <div className="relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center my-[750px]">
          <div className="h-auto overflow-y-auto max-w-[1200px] w-[95%]">
              <table className="table-fixed w-full min-w-full border-collapse">
                  <thead>
                      <tr className="bg-blue-950 divide-x divide-gray-200 text-white px-4 py-4 pt-[400px]">
                          <th className="w-[50px] border max-[1024px]:text-[10px] px-3 py-3">Vestfirðir</th>
                          <th className="w-[30px] border max-[1024px]:text-[10px] px-3 py-3">Tími</th>
                          <th className="w-[10px] border max-[1024px]:text-[10px] px-3 py-3">°C</th>
                          <th className="w-[10px] border max-[1024px]:text-[10px] px-3 py-3">SND cm</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] px-3 py-3 max-[800px]:px-[0.2rem] max-[800px]:py-[0.4rem] max-[700px]:text-[8px]">Vindur</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] px-3 py-3 max-[580px]:text-[7px] max-[800px]:px-[0.2rem]">cm/12</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] px-3 py-3 max-[580px]:text-[7px] max-[800px]:px-[0.2rem]">cm/24</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] px-3 py-3 max-[800px]:text-[7px] max-[800px]:px-[0.2rem]">MTP@cm</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] px-3 py-3 max-[800px]:text-[7px] max-[800px]:px-[0.2rem]">ATP@cm</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data1.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white hover:bg-gray-200 cursor-pointer" : "bg-gray-100 hover:bg-gray-200 cursor-pointer"}>
                              <td className="border max-[1024px]:text-[10px] px-3 py-3 max-[800px]:px-[0.2rem] max-[800px]:py-[0.4rem] hover:underline">{item.location}</td>
                              <td className="border max-[1024px]:text-[10px] px-3 py-3">{item.time}</td>
                              <td className="border max-[1024px]:text-[10px] px-3 py-3">{item.temperature}</td>
                              <td className="border max-[1024px]:text-[10px] px-3 py-3">{item.snd}</td>
                              <td className="border max-[1024px]:text-[10px] px-3 py-3">{item.wind}</td>
                              <td className="border max-[1024px]:text-[10px] px-3 py-3">{item.cm12}</td>
                              <td className="border max-[1024px]:text-[10px] ">{item.cm24}</td>
                              <td className="border max-[1024px]:text-[10px] ">{item.mtp}</td>
                              <td className="border max-[1024px]:text-[10px] ">{item.atp}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>

              <table className="table-fixed w-full min-w-full border-collapse mt-[50px]">
                  <thead>
                      <tr className="bg-blue-950 divide-x divide-gray-200 text-white">
                          <th className="w-[50px] border max-[1024px]:text-[10px] ">Norðurland</th>
                          <th className="w-[30px] border max-[1024px]:text-[10px]">Tími</th>
                          <th className="w-[10px] border max-[1024px]:text-[10px]">°C</th>
                          <th className="w-[10px] border max-[1024px]:text-[10px]">SND cm</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] max-[800px]:px-[0.2rem] max-[800px]:py-[0.4rem] max-[700px]:text-[8px]">Vindur</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] max-[580px]:text-[7px] max-[800px]:px-[0.2rem]">cm/12</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] max-[580px]:text-[7px] max-[800px]:px-[0.2rem]">cm/24</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] max-[800px]:text-[7px] max-[800px]:px-[0.2rem]">MTP@cm</th>
                          <th className="w-[15px] border max-[1024px]:text-[10px] max-[800px]:text-[7px] max-[800px]:px-[0.2rem]">ATP@cm</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data2.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white hover:bg-gray-200 cursor-pointer" : "bg-gray-100 hover:bg-gray-200 cursor-pointer"}>
                              <td className="border max-[1024px]:text-[10px] px-2 max-[800px]:px-[0.2rem] max-[800px]:py-[0.4rem] hover:underline">{item.location}</td>
                              <td className="border max-[1024px]:text-[10px] px-2 py-2">{item.time}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.temperature}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.snd}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.wind}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.cm12}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.cm24}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.mtp}</td>
                              <td className="border max-[1024px]:text-[10px] px-2">{item.atp}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  </div>
);
}

export default Tabledemo;








