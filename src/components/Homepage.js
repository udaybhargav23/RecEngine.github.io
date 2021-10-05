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
    }else if (searchdata==='soaps'){
        elec='soaps';
        brand=searchdata;
    }else{
        elec='chocolates';
        brand=searchdata;
    }
    return(
        <>
            <ImageList elec={elec} brand={brand} />
        </>
    )
}

export default HomePage;