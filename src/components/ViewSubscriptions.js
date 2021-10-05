import React from "react";
import ImageItem from "./ImageItem";
import data from '../data';
import cameradata from '../cameradata';
import soapdata from '../soapdata';
import Chocolatedata from '../Chocolatedata';
import SubCard from "./SubCard";
import "../App.css";

function ViewSubscriptions(){
    var keys = Object.keys(localStorage);
    var subdata = null;
    var elec = "";
    if (keys){
        return (
            <div>
                <h2 className="subheading" >Subscribed Products</h2>
                {keys.map((item) => {
                    subdata = data.filter((items) => {
                        return items.asin === item;
                    })
                    elec="laptops";
                    if (subdata.length===0){
                        elec="cameras";
                        subdata = cameradata.filter((items) => {
                            return items.asin === item;
                        })
                    }
                    if (subdata.length===0){
                        elec="soaps";
                        subdata = soapdata.filter((items) => {
                            return items.asin === item;
                        })
                    }
                    if (subdata.length===0){
                        elec="chocolates";
                        subdata = Chocolatedata.filter((items) => {
                            return items.asin === item;
                        })
                    }
                    const { image,asin } = subdata[0];
                    var a1 = JSON.parse(localStorage.getItem(item)).subs;
                    var a2 = parseInt(JSON.parse(localStorage.getItem(item)).quans);
                    var a3 = JSON.parse(localStorage.getItem(item)).pays;
                    return (
                        <>
                            <div className="subgrid" >
                                <ImageItem 
                                    img={image}
                                    id={asin}
                                    elec={elec}
                                    >
                                </ImageItem>
                                <SubCard subs={a1} quans={a2} id={asin} pays={a3} elec={elec} />
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }
    return (
        <div></div>
    )

}

export default ViewSubscriptions;