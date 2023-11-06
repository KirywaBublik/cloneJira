import { useState } from 'react';

const useSelectUsers = (initialItems) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputCheckBox, setInputCheckBox] = useState(initialItems);

    const handleSelect = (id) => {
        const updatedInputRdio = inputCheckBox.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: !item.checked,
                };
            }
            return item;
        });

        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }

        setInputCheckBox(updatedInputRdio);
    };

    return [selectedItems, inputCheckBox, handleSelect];
};

export default useSelectUsers;