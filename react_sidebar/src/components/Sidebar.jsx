import React, { useState } from 'react'
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"

const Sidebar = (props) => {
    const { expanded, setExpanded } = props

    return (
        <aside className='h-screen'>
            <nav className={`h-full flex flex-col ${expanded ? 'px-2' : 'px-1'} bg-white border-r shadow-sm transition-all duration-500 ${expanded ? 'w-[250px]' : 'w-[80px]' }`}>
                <div className="p-4 pb-2 flex justify-between item-center">
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded(oldExp => !oldExp)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <ul className="flex-1 px-3">{props.children}</ul>
                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div >
            </nav>
        </aside>
    )
}

export default Sidebar
