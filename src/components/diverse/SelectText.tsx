import {useEffect, useState} from "react";

// styles
import "./SelectText.css"

const SelectText: React.FC<{
    elements: string[],
    onChange: Function
}> =  ({elements, onChange}) => {


    const [selectedText, setSelectedText] = useState(null);

    useEffect(() => {
        if (selectedText !== null) {
            onChange(selectedText)
        }

    }, [selectedText]);


    return <div onClick={(e:any) => e.target?.closest(".option") && setSelectedText(e.target.textContent)} className="SelectText">
        {
            elements.map((value, index) => (
                <div key={index} className={ `option ` } >
                    {value}
                </div>
            ))
        }
    </div>
}

export default SelectText;