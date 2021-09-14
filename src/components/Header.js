import React, { useState } from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Header(props){
    const { setSearch } = props;
    const search = ['laptops','cameras'];
    const [selection, setSelection] = useState("");
    console.log(selection);
    return (
      <div className="container">
        <div className="logocontainer">
          <Link to="/homepage">
            <img src="https://627135-2036441-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/08/logo-light.svg" alt="techigai-logo" className="logo" />
          </Link>
        </div>
        <div className="searchbar">
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={search.map((option) => option)}
            renderInput={(params) => (
              <TextField className="textfield"
                {...params}
                // label="Search input"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
            onChange={function (event,currentSelection) {
              setSelection(currentSelection);
              setSearch(currentSelection);
              event.preventDefault();
            }}
          />
        </div>
        <div>
          <Link to='/homepage'>
            <button className="searchbutton">Search</button>
          </Link>
        </div>
        <div className="header-linkParent">
          <Link to="/laptops" className="header-link">Laptops</Link>
          <Link to="/cameras" className="header-link">Cameras</Link> 
        </div>
      </div>
    )
}

export default Header;
