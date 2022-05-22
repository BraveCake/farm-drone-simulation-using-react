
const plantTypes = {
    apple: {
        image: '/images/plant-apple.PNG'
    },
    corn: {
        image: '/images/plant-corn.PNG'
    },
    damaged: {
        image: '/images/plant-damaged.PNG'
    }
}

function Plant({type, ...props}) {
    return (
        <div className="plant">
            <img className="plant__land" src="/images/land-mid.PNG" style={{marginRight: '-5px'}} draggable={false}/>
            <img className="plant__tree" src={plantTypes[type].image}  draggable={false}/>
        </div>
    );
}

export default Plant;
