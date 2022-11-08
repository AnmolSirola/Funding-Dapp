import React from 'react';
import {useRouter} from 'next/router'

import {CreatorsData} from '../SponsorsData/SponsorsData';

const Creator = () => {
    const router = useRouter()
    const {address} = router.query

    return (
        <p>
            Post: {address}
        </p>
    )
};

export default Creator;