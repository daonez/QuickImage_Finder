import React from 'react';
import Navbar from 'components/NavBar';
import PixabaySearch from 'components/api/Pixabay/PixabaySearch';

export default function PixabayPage() {
    return (
        <>
            <Navbar />
            <PixabaySearch />
        </>
    );
}
