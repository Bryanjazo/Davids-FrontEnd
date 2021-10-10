import React from 'react'
import RecentsCard from '../Card/RecentsCard'
import './recents.css'

export default function Recents() {
    return (
        <div className='recentSection'>
            <h3 className='recentsTitle'>Recents</h3>
            <RecentsCard />
        </div>
    )
}
