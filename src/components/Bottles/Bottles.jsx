import{ use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottlesData = use(bottlesPromise)
    // console.log(bottlesData)
    return (
        <div>
            <h3>Total Bottles: {bottlesData.length}</h3>
           <div className='bottles-container'>
             {
                bottlesData.map(bottle=> <Bottle 
                    key={bottle.id}
                    bottle={bottle}
                    ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;