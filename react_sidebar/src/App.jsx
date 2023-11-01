import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import SidebarItem from './components/SidebarItem'
import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy } from 'lucide-react'

const App = () => {
  const [alert, setAlert] = useState(true);
  const [active, setActive] = useState(true);
  const [expanded, setExpanded] = useState(true);

  
  
  return (
    <div>
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        <SidebarItem expanded={expanded} icon= {<LayoutDashboard size={20} />} text="Dashboard" active={active}/>
        <SidebarItem expanded={expanded} icon= {<BarChart3 size={20} />} text="BarChart" alert={alert}/>
        <SidebarItem expanded={expanded} icon= {<UserCircle size={20} />} text="User" />
        <SidebarItem expanded={expanded} icon= {<Boxes size={20} />} text="Boxes" />
        <SidebarItem expanded={expanded} icon= {<Package size={20} />} text="Package" />
        <SidebarItem expanded={expanded} icon= {<Receipt size={20} />} text="Receipt" />
        <SidebarItem expanded={expanded} icon= {<Settings size={20} />} text="Settings" />
        <SidebarItem expanded={expanded} icon= {<LifeBuoy size={20} />} text="LifeBuoy" />        
      </Sidebar>
    </div>
  )
}

export default App
