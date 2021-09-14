import React from 'react';
import ImageList from './ImageList';

function HomePage(props){
    const { searchdata } = props;
    var elec=null;
    var brand=null;
    if (searchdata==='cameras'){
        elec="cameras";
    }else if (searchdata==='laptops'){
        elec='laptops';
    }else if (searchdata==='Nikon' || searchdata==='Canon'){
        elec='cameras';
        brand=searchdata;
    }else{
        elec='laptops';
        brand=searchdata;
    }
    return(
        <>
            <ImageList elec={elec} brand={brand} />
        </>
    )
}

export default HomePage;