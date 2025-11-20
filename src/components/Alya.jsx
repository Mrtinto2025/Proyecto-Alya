import React from 'react'

export default function Alya({ name = 'Alya', bio = 'Tu waifu virtual.', avatar }) {
  return (
    <div className="alya-card" style={{display:'flex',alignItems:'center',gap:'12px'}}>
      <div style={{width:64,height:64,flex:'none'}}>
        {avatar ? (
          <img src={avatar} alt={`${name} avatar`} style={{width:'100%',height:'100%',borderRadius:12}} />
        ) : (
          <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="12" fill="#ffd6f0" />
            <circle cx="32" cy="24" r="10" fill="#fff" />
            <rect x="16" y="38" width="32" height="10" rx="3" fill="#fff" />
          </svg>
        )}
      </div>
      <div>
        <div style={{fontWeight:700}}>{name}</div>
        <div style={{fontSize:'0.9em',opacity:0.85}}>{bio}</div>
      </div>
    </div>
  )
}
