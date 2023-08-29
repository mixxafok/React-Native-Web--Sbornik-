import React, { useEffect, useState} from 'react';
import { View } from 'react-native';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NameSongs from './NameSongs';
import BlagoEsti  from './songs/BlagoEsti.js';
import VstaetZarya from "./songs/VstaetZarya.js";
import VTebeGospod  from './songs/VTebeGospod.js';
import VChristeOdnom  from './songs/VChristeOdnom.js';
import VChasKogdaTryba from "./songs/VChasKogdaTryba.js";
import DerjitOnMenya from "./songs/DerjitOnMenya.js";
import DoveryatTebe from "./songs/DoveryatTebe.js";
import DolgMoyYplatil from "./songs/DolgMoyYplatil.js";
import EstiNaNebeGorod from "./songs/EstiNaNebeGorod.js";
import ZaLoveZaMilost from "./songs/ZaLoveZaMilost.js";
import ZvezdDivnieAlmazi from "./songs/ZvezdDivnieAlmazi.js";
import ZdeciNaZemle from "./songs/ZdeciNaZemle.js";
import KakPrekrasno from "./songs/KakPrekrasno.js";
import KakHorosho from "./songs/KakHorosho.js";
import KtoJeYa from "./songs/KtoJeYa.js";
import KtoMoraVse from "./songs/KtoMoraVse.js";
import KydaBiYaIdtiHotel from "./songs/KydaBiYaIdtiHotel.js";
import LybitJesusMenya from "./songs/LybitJesusMenya.js";
import LybitEtoZnachit from "./songs/LybitEtoZnachit.js";
import LoveChtoNePomnit from "./songs/LoveChtoNePomnit.js";
import MilostiTvoey from "./songs/MilostiTvoey.js";
import MoyaMolitva from "./songs/MoyaMolitva.js";
import MiNygniDrygDrygy from "./songs/MiNygniDrygDrygy.js";
import NaDalekomHolme from "./songs/NaDalekomHolme.js";
import NadCerkovnimiKupolami from "./songs/NadCerkovnimiKupolami.js";
import NaychiMenya from "./songs/NaychiMenya.js";
import NeymryINoBydy from "./songs/NeymryINoBydy.js";
import OdnaListva from "./songs/OdnaListva.js";
import OtPogibeliSpasla from "./songs/OtPogibeliSpasla.js";
import ProsipausNaZare from "./songs/ProsipausNaZare.js";
import PustYgasloNebo from "./songs/PustYgasloNebo.js";
import PytKGolgofe from "./songs/PytKGolgofe.js";
import SvetomSvoim from "./songs/SvetomSvoim.js";
import SkoroDayTotPridet from "./songs/SkoroDayTotPridet.js";
import SkrouMenya from "./songs/SkrouMenya.js";
import SonGodNamRojden from "./songs/SonGodNamRojden.js";
import TamDaleko from "./songs/TamDaleko.js";
import TiIskupilMir from "./songs/TiIskupilMir.js";
import TiKydaIdesh from "./songs/TiKydaIdesh.js";
import TiMenyaNapolni from "./songs/TiMenyaNapolni.js";
import TiNePechalsya from "./songs/TiNePechalsya.js";
import UnostSvetlya from "./songs/UnostSvetlya.js";
import KraiChydeshu from "./songs/KraiChydeshu.js";
import HristianinNesiOgon from "./songs/HristianinNesiOgon.js";
import SkolkoEstiZamanchivih from "./songs/SkolkoEstiZamanchivih.js";
import TiPrishelVEtotMir from "./songs/TiPrishelVEtotMir.js";
import VdoliPoViaDolorossa from "./songs/VdoliPoViaDolorossa.js";


export default function App() {
  
  return (

    <View >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NameSongs />}  />
          <Route path='/BlagoEsti' element={<BlagoEsti /> } />
          <Route path='/VstaetZarya' element={<VstaetZarya />} />
          <Route path='/VTebeGospod' element={<VTebeGospod />} />
          <Route path='/VChristeOdnom' element={<VChristeOdnom />} />
          <Route path='/VChasKogdaTryba' element={<VChasKogdaTryba /> } />
          <Route path='/DerjitOnMenya' element={<DerjitOnMenya />} />
          <Route path='/DoveryatTebe' element={<DoveryatTebe />} />
          <Route path='/DolgMoyYplatil' element={<DolgMoyYplatil />} />
          <Route path='/EstiNaNebeGorod' element={<EstiNaNebeGorod /> } />
          <Route path='/ZaLoveZaMilost' element={<ZaLoveZaMilost />} />
          <Route path='/ZvezdDivnieAlmazi' element={<ZvezdDivnieAlmazi />} />
          <Route path='/ZdeciNaZemle' element={<ZdeciNaZemle />} />
          <Route path='/KakPrekrasno' element={<KakPrekrasno /> } />
          <Route path='/KakHorosho' element={<KakHorosho />} />
          <Route path='/KtoJeYa' element={<KtoJeYa />} />
          <Route path='/KtoMoraVse' element={<KtoMoraVse />} />
          <Route path='/KydaBiYaIdtiHotel' element={<KydaBiYaIdtiHotel /> } />
          <Route path='/LybitJesusMenya' element={<LybitJesusMenya />} />
          <Route path='/LybitEtoZnachit' element={<LybitEtoZnachit />} />
          <Route path='/LoveChtoNePomnit' element={<LoveChtoNePomnit />} />
          <Route path='/MilostiTvoey' element={<MilostiTvoey /> } />
          <Route path='/MoyaMolitva' element={<MoyaMolitva />} />
          <Route path='/MiNygniDrygDrygy' element={<MiNygniDrygDrygy />} />
          <Route path='/NaDalekomHolme' element={<NaDalekomHolme />} />
          <Route path='/NadCerkovnimiKupolami' element={<NadCerkovnimiKupolami /> } />
          <Route path='/NaychiMenya' element={<NaychiMenya />} />
          <Route path='/NeymryINoBydy' element={<NeymryINoBydy />} />
          <Route path='/OdnaListva' element={<OdnaListva />} />
          <Route path='/OtPogibeliSpasla' element={<OtPogibeliSpasla /> } />
          <Route path='/ProsipausNaZare' element={<ProsipausNaZare />} />
          <Route path='/PustYgasloNebo' element={<PustYgasloNebo />} />
          <Route path='PytKGolgofe' element={<PytKGolgofe /> } />
          <Route path='SvetomSvoim' element={<SvetomSvoim />} />
          <Route path='SkoroDayTotPridet' element={<SkoroDayTotPridet />} />
          <Route path='SkrouMenya' element={<SkrouMenya />} />
          <Route path='SonGodNamRojden' element={<SonGodNamRojden /> } />
          <Route path='TamDaleko' element={<TamDaleko />} />
          <Route path='TiIskupilMir' element={<TiIskupilMir />} />
          <Route path='TiKydaIdeshOt' element={<TiKydaIdesh /> } />
          <Route path='TiMenyaNapolni' element={<TiMenyaNapolni />} />
          <Route path='TiNePechalsya' element={<TiNePechalsya />} />
          <Route path='UnostSvetlya' element={<UnostSvetlya /> } />
          <Route path='KraiChydeshu' element={<KraiChydeshu />} />
          <Route path='HristianinNesiOgon' element={<HristianinNesiOgon />} />
          <Route path='SkolkoEstiZamanchivih' element={<SkolkoEstiZamanchivih />} />
          <Route path='TiPrishelVEtotMir' element={<TiPrishelVEtotMir /> } />
          <Route path='VdoliPoViaDolorossa' element={<VdoliPoViaDolorossa />} />

        </Routes>
      </BrowserRouter>
      {/* <Stack /> */}
      
     
    </View>
  );
    
}
