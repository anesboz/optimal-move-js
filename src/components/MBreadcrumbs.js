import { Breadcrumbs, Grid, Link } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'routes'

export default function MBreadcrumbs() {
  const navigate = useNavigate()
  const location = useLocation()
  const paths = location.pathname.split('/').filter((e) => e)
  paths.unshift('')

  const childrens = paths.flatMap((p, i) => {
    const path = '/' + p
    const route = routes.find((e) => e.path === path)
    if (route == null) {
      return []
    }
    const Icon = route.icon
    return (
      <Grid container sx={{ p: 1 }} key={i}>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate(route.path)}
          style={{ cursor: `pointer` }}
        >
          <small className="center-y">
            <Icon sx={{ mr: 0.6 }} fontSize="inherit" />
            {route.name}
          </small>
        </Link>
      </Grid>
    )
  })
  return <Breadcrumbs>{childrens}</Breadcrumbs>
}
