import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  header: React.ReactNode
  footer: React.ReactNode;
}

export const MainLayout = (props: Props) => {
  return (
    <>
    {props.header}
    <Outlet/>
    {props.footer}
    </>
  )
}
