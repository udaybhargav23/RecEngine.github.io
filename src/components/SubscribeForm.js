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
        <div>
            <form>
                <input type="radio" name="subscribe" onClick={function(){
                    updateClass("deliver");
                }} />
                <label>One-time purchase</label><br />
                <input type="radio" name="subscribe" onClick={function(){
                    updateClass("delivery");
                }} />
                <label>Subscribe</label><br />
                <br />
                <div className={Class}>Deliver:</div>
                <input list="subs" name="subs" className={Class} value={sub} onChange={e => setSub(e.target.value)} />
                <datalist id="subs" className={Class} >
                    <option value="Every week (10% off)" defaultValue/>
                    <option value="Every month (10% off)" />
                    <option value="Every half year (10% off)" />
                    <option value="Every year (10% off)" />
                </datalist>
                <br />
                <input list="quan" name="quan" id="quanInput" className={Class} value={quan} onChange={e => setQuan(e.target.value)} />
                <datalist id="quan" name="quan" >
                    <option value="1"/>
                    <option value="1"/>
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                    <option value="5" />
                    <option value="6" />
                    <option value="7" />
                    <option value="8" />
                    <option value="9" />
                    <option value="10" />
                    <option value="11" />
                    <option value="12" />
                </datalist><br />
                <br />
                <input type="radio" name="payment" onClick={function(){
                    setPayment("1");
                }} />
                <label>One Time Payment</label><br />
                <input type="radio" name="payment" onClick={function(){
                    setPayment("2");
                }} />
                <label>Auto Debit Payment</label><br />
                <input type="radio" name="payment" onClick={function(){
                    setPayment("3");
                }} />
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
    )
}

export default SubscribeForm;