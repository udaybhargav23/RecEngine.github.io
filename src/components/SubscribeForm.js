import React, { useState } from "react";
import "../App.css";
import { Link } from 'react-router-dom';

function SubscribeForm(props){
    const { id } = props;
    const [Class,updateClass] = useState("deliver");
    const [sub,setSub] = useState("Every month (10% off)");
    const [quan,setQuan] = useState("0");
    const [payment,setPayment] = useState(null);
    var arr = {
        "subs" : sub,
        "quans" : quan,
        "pays" : payment
    };
 
    return(
        <>
        <h3>Payment and Subscription</h3>
        <div className="subscont">
            <form>
                <input type="radio" name="subscribe" onClick={function(){
                    updateClass("deliver");
                }} /> &nbsp;
                <label>One-time purchase</label><br />
                <input type="radio" name="subscribe" onClick={function(){
                    updateClass("delivery");
                }} /> &nbsp;
                <label>Subscribe</label><br />
                <br />
                <div id="deliverheading" className={Class}>Delivery:</div><br />
                <label>Frequency: </label><br />
                <input list="subs" name="subs" id="inputboxsubs" className={Class} value={sub} onChange={e => setSub(e.target.value)} /> <br />
                <datalist id="subs" className="optiondecor" >
                    <option value="Every day (10% off)" />
                    <option value="Every week (10% off)" />
                    <option value="Every month (10% off)" />
                    <option value="Quarterly (10% off)" />
                    <option value="Every half year (10% off)" />
                    <option value="Every year (10% off)" />
                </datalist>
                <br />
                <label>Quantity: </label><br />
                <input type="text" id="inputboxsubs" className={Class} value={quan} onChange={e => setQuan(e.target.value)} />
                <br />
                <br />
                <input type="radio" name="payment" onClick={function(){
                    setPayment("1");
                }} /> &nbsp;
                <label>One Time Payment</label><br />
                <input type="radio" name="payment" onClick={function(){
                    setPayment("2");
                }} /> &nbsp;
                <label>Auto Debit Payment</label><br />
                <input type="radio" name="payment" onClick={function(){
                    setPayment("3");
                }} /> &nbsp;
                <label>Payment Through Invoices</label><br />
                <br/>
                <div className="popupbutton subsign" onClick={function(){
                    if (localStorage.getItem(id)){
                        const temp = parseInt(JSON.parse(localStorage.getItem(id)).quans)+parseInt(quan);
                        setQuan(temp);
                        arr.quans = temp;
                        arr.pays = payment;
                        localStorage.setItem(id,JSON.stringify(arr));
                        alert("Added Successfully");
                    }else if(Class==='deliver'){
                        alert("Subscribe to add Item");
                    }else if(parseInt(quan)<=0){
                        alert("Minimum 1 item is required for subscription");
                    }else if(!payment){
                        alert("Add payment option");
                    }else{
                        localStorage.setItem(id,JSON.stringify(arr));
                        alert("Added Successfully");
                    }
                }} >Add</div>
                <Link to="/ViewSubscriptions" target="_blank" className="popupbutton">View</Link>
            </form>
        </div>
        </>
    )
}

export default SubscribeForm;
