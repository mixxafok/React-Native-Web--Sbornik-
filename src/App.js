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
import NashaJizniThisGod from './songs/NashaJizniThisGod';
import NeperechestiNam from './songs/NeperechestiNam';

export default function App() {
  useEffect( ()=>{
    window.scrollTo(0, 0)
  },[])

  const [namSong, setNamSong] = useState();
//console.log(namSong)

  return (

    <View >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NameSongs setNamSong={setNamSong}/>}  />
          <Route path='/BlagoEsti' element={<BlagoEsti namSong={namSong}/> } />
          <Route path='/VstaetZarya' element={<VstaetZarya namSong={namSong}/>} />
          <Route path='/VTebeGospod' element={<VTebeGospod namSong={namSong}/>} />
          <Route path='/VChristeOdnom' element={<VChristeOdnom namSong={namSong}/>} />
          <Route path='/VChasKogdaTryba' element={<VChasKogdaTryba namSong={namSong}/> } />
          <Route path='/DerjitOnMenya' element={<DerjitOnMenya namSong={namSong}/>} />
          <Route path='/DoveryatTebe' element={<DoveryatTebe namSong={namSong}/>} />
          <Route path='/DolgMoyYplatil' element={<DolgMoyYplatil namSong={namSong}/>} />
          <Route path='/EstiNaNebeGorod' element={<EstiNaNebeGorod namSong={namSong}/> } />
          <Route path='/ZaLoveZaMilost' element={<ZaLoveZaMilost namSong={namSong}/>} />
          <Route path='/ZvezdDivnieAlmazi' element={<ZvezdDivnieAlmazi namSong={namSong}/>} />
          <Route path='/ZdeciNaZemle' element={<ZdeciNaZemle namSong={namSong}/>} />
          <Route path='/KakPrekrasno' element={<KakPrekrasno namSong={namSong}/> } />
          <Route path='/KakHorosho' element={<KakHorosho namSong={namSong}/>} />
          <Route path='/KtoJeYa' element={<KtoJeYa namSong={namSong}/>} />
          <Route path='/KtoMoraVse' element={<KtoMoraVse namSong={namSong}/>} />
          <Route path='/KydaBiYaIdtiHotel' element={<KydaBiYaIdtiHotel namSong={namSong}/> } />
          <Route path='/LybitJesusMenya' element={<LybitJesusMenya namSong={namSong}/>} />
          <Route path='/LybitEtoZnachit' element={<LybitEtoZnachit namSong={namSong}/>} />
          <Route path='/LoveChtoNePomnit' element={<LoveChtoNePomnit namSong={namSong}/>} />
          <Route path='/MilostiTvoey' element={<MilostiTvoey namSong={namSong}/> } />
          <Route path='/MoyaMolitva' element={<MoyaMolitva namSong={namSong}/>} />
          <Route path='/MiNygniDrygDrygy' element={<MiNygniDrygDrygy namSong={namSong}/>} />
          <Route path='/NaDalekomHolme' element={<NaDalekomHolme namSong={namSong}/>} />
          <Route path='/NadCerkovnimiKupolami' element={<NadCerkovnimiKupolami namSong={namSong}/> } />
          <Route path='/NaychiMenya' element={<NaychiMenya namSong={namSong}/>} />
          <Route path='/NeymryINoBydy' element={<NeymryINoBydy namSong={namSong}/>} />
          <Route path='/OdnaListva' element={<OdnaListva namSong={namSong}/>} />
          <Route path='/OtPogibeliSpasla' element={<OtPogibeliSpasla namSong={namSong}/> } />
          <Route path='/ProsipausNaZare' element={<ProsipausNaZare namSong={namSong}/>} />
          <Route path='/PustYgasloNebo' element={<PustYgasloNebo namSong={namSong}/>} />
          <Route path='/PytKGolgofe' element={<PytKGolgofe namSong={namSong}/> } />
          <Route path='/SvetomSvoim' element={<SvetomSvoim namSong={namSong}/>} />
          <Route path='/SkoroDayTotPridet' element={<SkoroDayTotPridet namSong={namSong}/>} />
          <Route path='/SkrouMenya' element={<SkrouMenya namSong={namSong}/>} />
          <Route path='/SonGodNamRojden' element={<SonGodNamRojden namSong={namSong}/> } />
          <Route path='/TamDaleko' element={<TamDaleko namSong={namSong}/>} />
          <Route path='/TiIskupilMir' element={<TiIskupilMir namSong={namSong}/>} />
          <Route path='/TiKydaIdesh' element={<TiKydaIdesh namSong={namSong}/> } />
          <Route path='/TiMenyaNapolni' element={<TiMenyaNapolni namSong={namSong}/>} />
          <Route path='/TiNePechalsya' element={<TiNePechalsya namSong={namSong}/>} />
          <Route path='/UnostSvetlya' element={<UnostSvetlya namSong={namSong}/> } />
          <Route path='/KraiChydeshu' element={<KraiChydeshu namSong={namSong}/>} />
          <Route path='/HristianinNesiOgon' element={<HristianinNesiOgon namSong={namSong}/>} />
          <Route path='/SkolkoEstiZamanchivih' element={<SkolkoEstiZamanchivih namSong={namSong}/>} />
          <Route path='/TiPrishelVEtotMir' element={<TiPrishelVEtotMir namSong={namSong}/> } />
          <Route path='/VdoliPoViaDolorossa' element={<VdoliPoViaDolorossa namSong={namSong}/>} />
          <Route path='/NashaJizniThisGod' element={<NashaJizniThisGod namSong={namSong}/>} />
          <Route path='/NeperechestiNam' element={<NeperechestiNam namSong={namSong}/>} />
        </Routes>
      </BrowserRouter>
      {/* <Stack /> */}
      
     
    </View>
  );
    
}
