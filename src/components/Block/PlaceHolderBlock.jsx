import React  from 'react';
import ContentLoader from "react-content-loader";

function PlaceHolderBlock() {
    return(
        <ContentLoader
            speed={2}
            width={280}
            height={480}
            viewBox="0 0 280 480"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="0" y="300" rx="6" ry="6" width="280" height="22" />
            <rect x="0" y="340" rx="6" ry="6" width="280" height="50" />
            <rect x="0" y="410" rx="10" ry="10" width="75" height="35" />
            <rect x="141" y="400" rx="20" ry="20" width="130" height="45" />
        </ContentLoader>
    )
    
}
export default PlaceHolderBlock;