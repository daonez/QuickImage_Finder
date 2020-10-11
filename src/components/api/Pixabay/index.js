import React from 'react';
import Navbar from 'components/NavBar';
import PixaSearch from 'components/api/Pixabay/PixabaySearchBar';


export default function PixabayPage() {
    return (
        <>
            <Navbar />
            <PixaSearch />
        </>
    );
}
