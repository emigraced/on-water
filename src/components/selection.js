import React from 'react';

const SelectLat = () => {
    return(
        <div>
            <label for="lat">Latitude:</label>
            <select data-bind="options: Lattitude, optionCaption: 'Choose one...', value: selectedLattitude, valueAllowUnset: true"></select>
        </div>
    )
}

export default SelectLat