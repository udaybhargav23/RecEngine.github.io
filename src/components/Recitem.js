import React from 'react';
import cameradata from '../cameradata';
import data from '../data';
import fulldata from '../Fulldata';
import SimpleRating from './SimpleRating';
import soapdata from '../soapdata';
import Chocolatedata from '../Chocolatedata';

function Recitem(props){
    const {id,elec} = props;
    var subdata = cameradata.filter((item) => {
        const temp = item.asin.toLowerCase();
        return temp === id;
    })
    var tempdata = null;
    if (elec === 'Desktop'){
        subdata = data.filter((item) => {
            const temp2 = item.asin.toLowerCase();
            return temp2 === id;
        })
        tempdata = fulldata.filter((item) => {
            const temp2 = item.asin.toLowerCase();
            return temp2 === id; 
        })
    }
    if (elec==='Soaps'){
        subdata = soapdata.filter((item) => {
            const temp2 = item.asin.toLowerCase();
            return temp2 === id;
        })
    }
    if (elec==='Chocolates'){
        subdata = Chocolatedata.filter((item) => {
            const temp2 = item.asin.toLowerCase();
            return temp2 === id;
        })
    }
    if (subdata.length===0){
        return(
            <></>
        )
    }
    if (elec==='Desktop' && subdata.length>0){
        //const { Brand,ModelName,ProcessorModelNumber,DeviceType } = subdata[0];
        const { Brand,ModelName,GraphicsCoprocessor,
            RamMemoryInstalledSize,HardDriveSize,OperatingSystem,ItemWeight,ItemModelNumber } = subdata[0];
        return (
            <div className="recimagecontainer2">
                <div className="recphoto">
                    <img src = {subdata[0].image} alt="laptop" className="recimage" />
                </div>
                 <div className="recdetails">{Brand} {ModelName} {GraphicsCoprocessor}
                        ({RamMemoryInstalledSize}/{HardDriveSize}/{OperatingSystem}/
                        {ItemWeight}){ItemModelNumber}...</div>
                <SimpleRating rating={tempdata[0].rating} />
                <div className='price'><span className="textdesign rollimagetext">Price: </span><sup>&#8377;</sup>{tempdata[0].price}.00</div>
            </div>
        )
    }else if (elec==='Soaps' && subdata.length>0){
        const { details,image,rating,Price } = subdata[0];
        return (
            <div className="recimagecontainer2">
                <div className="recphoto">
                    <img src = {image} alt="laptop" className="recimage" />
                </div>
                 <div className="recdetails">{details}</div>
                <SimpleRating rating={rating} />
                <div className='price'><span className="textdesign rollimagetext">Price: </span><sup>&#8377;</sup>{Price}.00</div>
            </div>
        )
    }else if (elec==='Chocolates' && subdata.length>0){
        const { image,rating,Brand,Form,GenericName,Speciality,Weight,Price } = subdata[0];
        return (
            <div className="recimagecontainer2">
                <div className="recphoto">
                    <img src = {image} alt="laptop" className="recimage" />
                </div>
                 <div className="recdetails">{Brand} {Form} {GenericName} {Speciality} {Weight}</div>
                <SimpleRating rating={rating} />
                <div className='price'><span className="textdesign rollimagetext">Price: </span><sup>&#8377;</sup>{Price}.00</div>
            </div>
        )
    }else{
        var { Brand,ItemModelNumber,BestSellersRank,Manufacturer,rating,price } = subdata[0];
    }

    return(
        <div className="recimagecontainer2">
            <div className="recphoto">
                <img src = {subdata[0].image} alt="camera" className="recimage2" />
            </div>
            <div className="recdetails">
                <div>{Brand} {ItemModelNumber} {BestSellersRank} Manufactured by {Manufacturer}</div>
                <SimpleRating rating={rating} />  
                <div className='price'><span className="textdesign rollimagetext">Price: </span><sup>&#8377;</sup>{price}.00</div>
            </div>
        </div>
    )
}

export default Recitem;