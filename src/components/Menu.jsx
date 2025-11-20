import React from 'react'
import { NavLink } from 'react-router-dom'
import Alya from './Alya'

export default function Menu() {
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 24px',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <Alya name="Alya" bio="Personaje de anime" />
      </div>
      <nav>
        <NavLink to="/" style={({isActive})=>({marginRight:12,opacity:isActive?1:0.8})}>Home</NavLink>
        <NavLink to="/about" style={({isActive})=>({marginRight:12,opacity:isActive?1:0.8})}>About</NavLink>
        <NavLink to="/gallery" style={({isActive})=>({opacity:isActive?1:0.8})}>Gallery</NavLink>
      </nav>
    </header>
  )
}
