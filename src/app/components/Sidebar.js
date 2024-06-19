"use client";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";


const App = () => {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);

    const Menus = [
        { title: "Vestfirðir", submenuItems: [
            { title: "Bolungarvík, Traðagil" },
            { title: "Bíldudalur" },
            { title: "Flateyri, Innra Bæjargil" },
            { title: "Flateyri, Miðhryggsgil" },
            { title: "Ísafjörður, Steiniðjugil" },
            { title: "Patreksfjörður, Brellur" },
            { title: "Seljalandsdalur, Kistufell" },
            { title: "Seljalandsdalur" },
            { title: "Súðavíkurhl. gil 6" },
            { title: "Súðavíkurhl. gil 22" },
            { title: "Tálknafjörður, Geitárhorn" },
            { title: "Önundarfj. Selabólsurð" },
        ]},
        { title: "Norðurland", submenuItems: [
            { title: "Bolungarvík, Traðagil" },
            { title: "Bíldudalur" },
            { title: "Ísafjörður, Steiniðjugil" },
            { title: "Ísafjörður, Steiniðjugil" },
            { title: "Ísafjörður, Steiniðjugil" },
            { title: "Ísafjörður, Steiniðjugil" },
            { title: "Ísafjörður, Steiniðjugil" },
        ]},
        { title: "Austurland", submenuItems: [
            { title: "Bolungarvík, Traðagil" },
            { title: "Bíldudalur" },
            { title: "Ísafjörður, Steiniðjugil" },
            { title: "Ísafjörður, Steiniðjugil" },
        ]},
        { title: "Suðurland", submenuItems: [
            { title: "Bolungarvík, Traðagil" },
        ]},
        { title: "Verkfæri með vandræði", submenuItems: [
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
            { title: "Bolungarvík, Traðagil" },
        ]},
    ];

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.length >= 1) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    const filteredMenus = Menus.map(menu => {
        const filteredSubmenuItems = menu.submenuItems.filter(submenuItem =>
            submenuItem.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const isMenuTitleMatch = menu.title.toLowerCase().includes(searchQuery.toLowerCase());

        return {
            ...menu,
            filteredSubmenuItems: isMenuTitleMatch ? menu.submenuItems : filteredSubmenuItems,
            isMenuTitleMatch,
            hasVisibleSubmenuItems: filteredSubmenuItems.length > 0
        };
    }).filter(menu =>
        menu.isMenuTitleMatch || menu.hasVisibleSubmenuItems
    );

    return (
        <div className="flex min-h-screen">
           
            <div className={`absolute top-[25px] duration-100 max-w-[300px] w-full right-[100px]
              max-[1024px]:left-1/2 max-[1024px]:transform max-[1024px]:-translate-x-1/2 max-[1024px]:top-[100px] max-[1024px]:max-w-[300px]
              max-[1500px]:max-w-[150px] max-[1500px]:right-[20px]`}>

                <div className="flex items-center rounded-md bg-white shadow-md px-4 py-2">
                    <BsSearch className="text-gray-500 text-lg mr-3" />
                    <input
                        type="search"
                        placeholder="Leita..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="text-base bg-transparent w-full focus:outline-none"
                    />
                </div>
            </div>
            {showResults && (
                <div className="fixed top-[70px] right-[100px] w-full max-w-[300px] bg-white border border-gray-300 rounded-md shadow-lg p-4
                max-[1024px]:left-1/2 max-[1024px]:transform max-[1024px]:-translate-x-1/2 max-[1024px]:top-[150px] max-[1024px]:max-w-[300px]
              max-[1500px]:max-w-[150px] max-[1500px]:right-[20px]`">
                    <ul>
                        {filteredMenus.map((menu, index) => (
                            <div key={index} className="mb-4">
                                <li className="text-gray-900 font-semibold">{menu.title}</li>
                                <ul className="pl-4 mt-2">
                                    {menu.filteredSubmenuItems.map((submenuItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="text-gray-700 py-1 hover:bg-gray-100 cursor-pointer rounded-md"
                                        >
                                            {submenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;





