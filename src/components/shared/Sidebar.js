import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-3">
                    <i className="far fa-moon"></i>
                    <span>Kenny</span>
                </h3>
                <button className="boton">
                    Logout
                </button>
                
            </div>
            <div className="journal_new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-3">
                    New Entry
                </p>

            </div>
            <JournalEntries/>
        </aside>
    )
}
