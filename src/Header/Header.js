import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


function Header() {
    return (
        <div className="header">
            <div className="header__icon">
                <div className="header__icons header__icon_active">
                <HomeIcon className="headerIcon__style"/>
                <p>Home</p>
                </div>
                <div className="header__icons">
                <FlashOnIcon className="headerIcon__style"/>
                <p>Trending</p>
                </div>
                <div className="header__icons">
                <LiveTvIcon className="headerIcon__style"/>
                <p>Verified</p>
                </div>
                <div className="header__icons">
                <VideoLibraryIcon className="headerIcon__style"/>
                <p>Collections</p>
                </div>
                <div className="header__icons">
                <SearchIcon className="headerIcon__style"/>
                <p>Search</p>
                </div>
                <div className="header__icons">
                <PersonOutlineIcon className="headerIcon__style"/>
                <p>persons</p>
                </div>
           
           
            

           
            
            </div>
            <div className="header__logo">
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png?fit=960%2C510" alt="hulu"/>
            </div>
            
           

        </div>
    )
}

export default Header
