import {useState} from "react";

export const useSelectedSessions = (initialSessions, setSessions) => {
    const [selectedSessions, setSelectedSessions] = useState([]);

    const chooseSession = (id) => {
        if (selectedSessions.includes(id)) {
            setSelectedSessions(
                selectedSessions.filter(sessionId => sessionId !== id)
            );
        } else {
            setSelectedSessions([...selectedSessions, id]);
        }
    };

    const deleteSession = () => {
        const updatedSessions = initialSessions.filter(
            session => !selectedSessions.includes(session.id)
        );
        setSessions(updatedSessions);
    };

    return [selectedSessions, chooseSession, deleteSession];
};
