import React from 'react';
import '../App.css';
import data from '../data';
import fullcameradata from '../fullcameradata';
import cameradata from '../cameradata';
import soapdata from '../soapdata';
import Chocolatedata from '../Chocolatedata';

function Frequent(props){
    const { id,dataset } = props;
    var data2 = data.filter((item) => {
        return item.asin === id;
    });
    if (data2.length === 0){
        data2 = fullcameradata.filter((item) =>{
            return item.asin ===id;
        })
    }
    if (data2.length === 0){
        data2 = soapdata.filter((item) =>{
            return item.asin ===id;
        })
    }
    if (data2.length === 0){
        data2 = Chocolatedata.filter((item) =>{
            return item.asin ===id;
        })
    }
    
    var tempdata = cameradata.filter((item) => {
        return item.asin === id;
    })
    const { image } = data2[0];
    if (dataset==='Desktop'){
        const { Brand,ModelName,GraphicsCoprocessor,
            RamMemoryInstalledSize,HardDriveSize,OperatingSystem,ItemWeight,ItemModelNumber } = data2[0];
        return (
            <div className="FrequentContainer" >
                <div className="FrequentImageContainer">
                    <img src = {image} alt="laptop" className="recimage3" />
                    <div className="plus" >+</div>
                    <img src = "https://images-eu.ssl-images-amazon.com/images/I/51ogrgGK+9L._AC_UL232_SR232,232_.jpg" alt="mouse" className="recimage3" />
                    <div className="plus" >+</div>
                    <img src = "https://images-eu.ssl-images-amazon.com/images/I/71EQMrnlDUL._AC_UL116_SR116,116_.jpg" alt="bag" className="recimage3" />
                    <div style={{marginTop:'4%'}}><span className="plus2">Total price: </span><span className="price"><sup>&#8377;</sup>41,078.00</span></div>
                </div>
                <div className="FrequentDetailContainer">
                    <div>
                        <b>This item: </b>{Brand} {ModelName} {GraphicsCoprocessor}
                            ({RamMemoryInstalledSize} {HardDriveSize} {OperatingSystem} 
                            {ItemWeight}){ItemModelNumber}...
                    </div>
                    <div>Lenovo 300 Wireless Compact Mouse (GX30K79401)</div>
                    <div>Lenovo Casual Laptop Backpack B210 15.6-inch (39.6 cm) Water Repellent Blue</div>
                </div>
            </div>
        )
    }else if (dataset==='Soaps'){
        const { image,details } = data2[0];
        return (
            <div className="FrequentContainer" >
                <div className="FrequentImageContainer">
                    <img src = {image} alt="laptop" className="recimage3" />
                    <div className="plus" >+</div>
                    <img src = "https://m.media-amazon.com/images/I/61nF1U8dpbL._SX679_.jpg" alt="mouse" className="recimage3" />
                    <div className="plus" >+</div>
                    <img src = "https://images-eu.ssl-images-amazon.com/images/I/61VX1wTFhUL._AC_UL320_SR320,320_.jpg" alt="mouse" className="recimage3" />
                    <div style={{marginTop:'4%'}}><span className="plus2">Total price: </span><span className="price"><sup>&#8377;</sup>480.00</span></div>
                </div>
                <div className="FrequentDetailContainer">
                    <div>
                        <b>This item: </b>{details}                      
                    </div>
                    <div>Dove Cream Beauty Bar - Soft, Smooth, Moisturised Skin, 3x125 g</div>
                    <div>Dove Care and Protect Bathing Bar - Removes 99% Germs and Moisturises Skin, Plant-Based Cleansers, 100 g</div>
                </div>
            </div>
        )
    }else if (dataset==='Chocolates'){
        const { image,Brand,Form,GenericName,Speciality,Weight } = data2[0];
        return (
            <div className="FrequentContainer" >
                <div className="FrequentImageContainer">
                    <img src = {image} alt="laptop" className="recimage3" />
                    <div className="plus" >+</div>
                    <img src = "https://images-eu.ssl-images-amazon.com/images/I/5134TnirP0L._SY300_SX300_QL70_FMwebp_.jpg" alt="mouse" className="recimage3" />
                    <div className="plus" >+</div>
                    <img src = "https://m.media-amazon.com/images/I/71IXYPKKFIL._SX679_.jpg" alt="bag" className="recimage3" />
                    <div style={{marginTop:'4%'}}><span className="plus2">Total price: </span><span className="price"><sup>&#8377;</sup>300.00</span></div>
                </div>
                <div className="FrequentDetailContainer">
                    <div>
                        <b>This item: </b>{Brand} {Form} {GenericName} {Speciality} {Weight}
                    </div>
                    <div>Dukes Waffy Rolls Jar - Chocolate, 250 g</div>
                    <div>Cadbury Oreo Original Chocolatey Sandwich (Vanilla Creme) Biscuit Family Pack, 300g</div>
                </div>
            </div>
        )
    }
    var { Brand,ItemModelNumber,BestSellersRank,Manufacturer } = tempdata[0];
    return (
        <div className="FrequentContainer" >
            <div className="FrequentImageContainer">
                <img src = {image} alt="laptop" className="recimage3" />
                <div className="plus" >+</div>
                <img src = "https://images-eu.ssl-images-amazon.com/images/I/71RxTP5GWoL._AC_UL232_SR232,232_.jpg" alt="stand" className="recimage3" />
                <div className="plus" >+</div>
                <img src = "https://images-eu.ssl-images-amazon.com/images/I/71zwj6gDtCL._AC_UL232_SR232,232_.jpg" alt="card" className="recimage3" />
                <div style={{marginTop:'4%'}}><span className="plus2">Total price: </span><span className="price"><sup>&#8377;</sup>41,078.00</span></div>
            </div>
            <div className="FrequentDetailContainer">
                <div>
                    <b>This item: </b>{Brand} {ItemModelNumber} {BestSellersRank} Manufactured by {Manufacturer}
                </div>
                <div>DIGITEK® (DTR 550LW) (170 CM) Tripod For DSLR, Camera |Operating Height: 5.57 Feet | Maximum Load Capacity up to 4.5kg | Portable Lightweight Aluminum Tripod with 360 Degree Ball Head | Carry Bag Included (Black)
                     ...
                </div>
                <div>SanDisk 64GB Ultra SDXC UHS-I Memory Card - 100MB/s, C10, U1, Full HD, SD Card - SDSDUNR-064G-GN6IN</div>
            </div>
        </div>
    )
}

export default Frequent;