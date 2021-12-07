import React from 'react'

export const JournalEntry = (value) => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://actualidadaeroespacial.com/wp-content/uploads/2020/06/SpacePerspective-190620-750x375.jpg)'
                        }}
            >

            </div>
            <div className="journal__entry-body">
                    <p className="journal__entry-title">
                        Un nuevo día
                    </p>
                    <p className="journal__entry-content">
                        Ullamco magna tempor ad duis 
                    </p>
            </div>
            <div className="journal_entry-date-box">
                 <span>Monday</span>       
                 <h4>06</h4>
            </div>
        </div>
    )
}
