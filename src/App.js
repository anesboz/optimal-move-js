import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import { Grid, ThemeProvider } from '@mui/material'
import { gridStyle, myTheme } from 'variables/styles'
import store from 'store'
import { Provider } from 'react-redux'
import Banner from 'components/Banner/Banner'
import { routes } from 'routes'
import MBreadcrumbs from 'components/MBreadcrumbs'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <ThemeProvider theme={myTheme}>
          <BrowserRouter basename="/optimal-move">
            <Grid container>
              <Grid
                item
                marginX={`auto`}
                {...gridStyle}
                sx={{ bgcolor: `white`, position: `relative` }}
              >
                <Banner />
                <MBreadcrumbs />
                <Routes>
                  {routes.map((e, i) => {
                    const Element = e.element
                    return <Route key={i} path={e.path} element={<Element />} />
                  })}
                  <Route path={'*'} element={<Navigate to={'/'} />} />
                </Routes>
              </Grid>
            </Grid>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  )
}

export default App
