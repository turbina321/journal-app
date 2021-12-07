import React from 'react';
import { Sidebar } from '../shared/Sidebar';

import { NoteScreen } from '../notes/NoteScreen';
export const JournalScreen = () => {
    return (
        <div className="journal__main_content">
            <Sidebar></Sidebar>

            <main className="principal">
                <NoteScreen/>

            </main>
        </div>
    )
}
