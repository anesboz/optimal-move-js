import Main from 'views/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStation from 'views/AddStation'
import AddOnglet from 'views/AddOnglet'
import React from 'react'
import { Grid, ThemeProvider } from '@mui/material'
import { myTheme } from 'variables/constants'
import TestMenu from 'components/TestMenu'
import Setting from 'views/Setting'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter basename="/optimal-move">
        <Grid container className="center">
          <Grid
            mob={12}
            tab={9}
            lap={4}
            style={{
              position: `relative`,
              overflow: `hidden`,
              height: `100vh`,
              backgroundColor: `white`,
            }}
          >
            <TestMenu />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/pageAddRow" element={<AddStation />} />
              <Route path="/addOnglet" element={<AddOnglet />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
