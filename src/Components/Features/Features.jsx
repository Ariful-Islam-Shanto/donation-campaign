import React, { useEffect, useState } from 'react';
import FeaturesCard from '../Features Card/FeaturesCard';

const Features = () => {

    const [Features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('./donation.json')
        .then(res => res.json())
        .then(data => setFeatures(data));
    }, []);

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-24'>
                {
                    Features.map(feature => <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>)
                }
            </div>
        </div>
    );
};

export default Features;