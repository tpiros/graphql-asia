import React from "react"
import Navigation from "./navigation"

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Navigation />
      {children}
    </div>
  )
}
