import React from 'react';
import data from '../data';
import fullcameradata from '../fullcameradata';
import { Link } from 'react-scroll';
import soapdata from '../soapdata';
import Chocolatedata from '../Chocolatedata';

function Details(props){
    const {id,elec} = props;
    var subdata = null;
    if (elec==='Desktop'){
        subdata = data.filter((item) =>{
            return item.asin===id;
        });
    }else if (elec==='Soaps'){
        subdata = soapdata.filter((item) =>{
            return item.asin===id;
        });
    }else if (elec==='Chocolates'){
        subdata = Chocolatedata.filter((item) =>{
            return item.asin===id;
        });
    }else{
        subdata = fullcameradata.filter((item) => {
            return item.asin === id;
        })
    }

    //if (elec==='Desktop'){
        return (
            <>
                <div className="detailsheight">
                    {subdata[0].featureDesc}.
                </div>
                {<Link  to="About" spy={true} smooth={true} className="scrolltext" >See more product details</Link>}
            </>
        )
    //}
    // return (
    //     <>
    //        <div className="detailsheight">
                
    //         </div> 
    //         {<Link  to="About" spy={true} smooth={true} className="scrolltext" >See more product details</Link>}
    //     </>
    // )
};

export default Details;