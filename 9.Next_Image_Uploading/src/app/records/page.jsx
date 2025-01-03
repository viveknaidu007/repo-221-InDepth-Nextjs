"use client"

import React, { useEffect, useState } from 'react';

const MobilesList = () => {
    const [mobiles, setMobiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMobiles = async () => {
            try {
                const response = await fetch('/api/upload-image');
                const result = await response.json();

                if (result.success) {
                    setMobiles(result.data);
                } else {
                    setError(result.message || 'Failed to fetch records');
                }
            } catch (err) {
                setError('Failed to fetch records');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMobiles();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Mobiles List</h1>
            <ul>
                {mobiles.map((mobile) => (
                    <li key={mobile._id}>
                        <h2>{mobile.name}</h2>
                        <p>Price: {mobile.price}</p>
                        <img src={mobile.image} alt={mobile.name} style={{ width: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobilesList;
