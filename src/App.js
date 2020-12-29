/* 

Bilgisayar Programcılığı Öğrencileri için örnek yapılmıştır.
Front End Epic Games
Yazar: Mehmet Basrioğlu



*/





import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';

import {FaHome,FaStore,FaUserFriends,FaDownload,
  FaUserCircle,FaSearch,FaListUl,
  FaPlay} from "react-icons/fa"
import {AiFillAppstore} from "react-icons/ai"
import {SiUnrealengine} from "react-icons/si"
import {MdSettings} from "react-icons/md"

import logo from "./assets/imgs/logo.png"

import rogue from "./assets/imgs/roguecompany.jpg"
import cyberpunk from "./assets/imgs/cyberpunk.jpg"
import watchdogs from "./assets/imgs/watchdogslegion.jpg"
import gtav from "./assets/imgs/gtav.jpg"
import valhala from "./assets/imgs/acvalhala.jpg"
import fortnite from "./assets/imgs/fortnite.jpg"
import rocketlig from "./assets/imgs/rocketleague.jpg"

import footballmanager from "./assets/imgs/footballmanager2020.jpg"
import reddeadredemption2 from "./assets/imgs/reddeadredemption2.jpg"

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <div className="sidebar">
     
          <div className="logoarea">
            <img className="logo" src={logo}></img>
            <h4>Epic Games Clone</h4>
          </div>

          <div className="sidebaritems">
            <button type="submit"><FaHome className="svg"/>Home</button>
            <button type="submit"><FaStore className="svg"/>Store</button>
            <button type="submit"><AiFillAppstore className="svg"/>Library</button>
            <button type="submit"><FaUserFriends className="svg"/>Friends</button>
            <button type="submit"><SiUnrealengine className="svg"/>Unreal Engine</button>
          </div>

          <div className="sidebaritems_info">
            <button type="submit"><FaDownload className="svg"/>Downloads</button>
            <button type="submit"><MdSettings className="svg"/>Settings</button>
            <button type="submit">
            <FaUserCircle className="svg"/>
              <span className="badge"></span>
              user</button>
              </div>

        </div>
        <div className="store">

   <div className="options">
    <div className="played">

       <p>Sort by:</p>
       <select id="sort">
  <option value="volvo">Recent Played </option>
  <option value="saab">Date</option>

</select>
 
    </div>
    <div className="filter">

<p>Filter:</p>
<select id="sort">
<option value="volvo">All </option>
<option value="saab">Installed</option>

</select>

</div>
    <div className="flex2">
      <div className="list">
        <AiFillAppstore/>
        <FaListUl/>
      </div>

      <div className="search">
        <FaSearch/>
        <input type="text" placeholder="Search"/>
      </div>
    </div>
   </div>
   {/* SORT - FİLTER - SEARCH */}
 
          {/* OYUNLAR  - ITEMS */}
          <div className="cards">
          <div className="carditem ">
              <img src={rogue} className="play"/>
              <p>Rogue Company</p>
              <span><FaPlay/> Play</span>
            </div>
            <div className="carditem">
              <img src={cyberpunk} />
              <p>Cyber Punk 2077</p>
              <span><FaDownload/> Download</span>
            </div>
            <div className="carditem">
              <img src={watchdogs} className="play"/>
              <p>Watchdogs Legion</p>
  
              <span><FaPlay/> Play</span>
            </div>
            <div className="carditem">
              <img src={gtav} />
              <p>Grand Theft Auto V</p>
              <span><FaDownload/> Download</span>
              
            </div>
            <div className="carditem">
              <img src={valhala} />
              <p>Assassin's Creed Valhala</p>
              <span><FaDownload/> Download</span>
            </div>
            <div className="carditem">
              <img src={fortnite} />
              <p>Fortnite</p>
              <span><FaDownload/> Download</span>
            </div>
            <div className="carditem">
              <img src={rocketlig} />
              <p>Rocket League</p>
              <span><FaDownload/> Download</span>
            </div>
            <div className="carditem">
              <img src={footballmanager} />
              <p>Football Manager 2020</p>
              <span><FaDownload/> Download</span>
            </div>
            <div className="carditem">
              <img src={reddeadredemption2} className="play" />
              <p>Red Dead Redemption 2</p>
              <span><FaPlay/> Play</span>
            </div>
       
          </div>

       

        </div>
      </div>
    </div>
  );
}

export default App;
