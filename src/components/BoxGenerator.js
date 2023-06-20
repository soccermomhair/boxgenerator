import React from 'react';
// const handleBoxColor = (e) => {
//     e.preventDefault();
//     setColor = 
// }
// const NewBox = () => {
//     const [color, setColor] = useState("");
//     height: 100 px;
//     width: 100px;
// }

const BoxGenerator = ({ boxes }) => {
    return (
        <div >
            {boxes.map((box, index) => (

                <div className='stybox' key={index} style={{ backgroundColor: box.color, height: box.height, width: box.width }}></div>
            ))
            }
        </div>
    );
}
export default BoxGenerator;