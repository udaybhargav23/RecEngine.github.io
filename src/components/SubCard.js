import React, { useState } from "react";
import cameradata from "../cameradata";
import fulldata from "../Fulldata";
import Chocolatedata from "../Chocolatedata";
import soapdata from "../soapdata";

function SubCard(props){
    const { subs,quans,id,pays,elec } = props
    const [ counter,updateCounter ] = useState(quans);
    var arr = {
        "subs" : subs,
        "quans" : quans,
        "pays" : pays
    };
    if (counter<=0){
        localStorage.removeItem(id);
        window.location.reload(false);
    }
    var p1 = null;
    if (pays==="1"){
        p1 = "One Time Payment"; 
    }else if (pays==="2"){
        p1 = "Auto Debit Payment";
    }else{
        p1 = "Payment Through Invoices"
    }
    var subdata = null;
    var price = null;
    if (elec==="laptops"){
        subdata = fulldata.filter((item) => {
            return item.asin === id;
        });
        price = subdata[0].price;
    }else if (elec==="cameras"){
        subdata = cameradata.filter((item) => {
            return item.asin === id;
        });
        price = subdata[0].price;
    }else if (elec==="chocolates"){
        subdata = Chocolatedata.filter((item) => {
            return item.asin === id;
        });
        price = subdata[0].Price;
    }else{
        subdata = soapdata.filter((item) => {
            return item.asin === id;
        });
        price = subdata[0].Price;
    }
    var total = parseInt(price)*counter;
    return(
        <div className="subcontainer" >
            <table>
                <tr>
                    <td><b>Subscription Period</b></td>
                    <td className="subval" >{subs}</td>
                </tr>
                <tr>
                    <td><b>Quantity</b></td>
                    <td className="subval" ><button onClick={function(){
                        updateCounter(counter-1);
                        arr.quans = counter;
                        localStorage.setItem(id,JSON.stringify(arr));
                    }} >-</button> {counter} <button onClick={function(){
                        updateCounter(counter+1);
                    }} >+</button></td>
                </tr>
                <tr>
                    <td><b>Payment type</b></td>
                    <td className="subval" >{p1}</td>
                </tr>
                <tr>
                    <td><b>Total</b></td>
                    <td className="subval" >&#8377;{total}/-</td>
                </tr>
            </table>
            <div className="subdelfloat" >
                <button onClick={
                    function(){
                        updateCounter(0);
                    }
                } className="subdelbutfloat" >Delete Subscription</button>
            </div>
        </div>
    )
}

export default SubCard;