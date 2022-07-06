import React, { useState } from 'react'
import { Heading, Center, Button } from '@chakra-ui/react'
import { Menu, MenuList, MenuButton } from '@chakra-ui/react'
import Home from './Home'
import Editor from './Editor'
import Settings from './Settings'

function App() {
    const [activePage, setActivePage] = useState("home");

    function page() {
        if (activePage === "home") {
            return <Home />
        } else if (activePage === "editor") {
            return <Editor columns={40} rows={20} />
        } else if (activePage === "settings") {
            return <Settings />
        }
    }

    return (
    <div className="App">
      <div>
          <Center>
          <Heading as='h1' size='4xl'>Tiled Image Editor</Heading>
          </Center>
      </div>
      <div>
          <Menu>
            <Center>
            <MenuButton as={Button} onClick={() => setActivePage("home")}>Home</MenuButton>
            <MenuButton as={Button} onClick={() => setActivePage("editor")}>Editor</MenuButton>
            <MenuButton as={Button} onClick={() => setActivePage("settings")}>Settings</MenuButton>
            </Center>
          </Menu>
      </div>
        { page() }
    </div>
);
}

export default App;
