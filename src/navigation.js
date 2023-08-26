import React from "react";
import NameSongs from './NameSongs.js';
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

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function Navigate() {

   return (

      <NavigationContainer >
         <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
            <Stack.Screen
               name="NameSongs"
               component = {NameSongs}
            />
            <Stack.Screen
               name="BlagoEsti"
               component = {BlagoEsti}
            />
            <Stack.Screen
               name="VstaetZarya"
               component = {VstaetZarya}
            />
            <Stack.Screen
               name="VTebeGospod"
               component = {VTebeGospod}
            />
            <Stack.Screen
               name="VChristeOdnom"
               component = {VChristeOdnom}
            />
            <Stack.Screen
               name="VdoliPoViaDolorossa"
               component = {VdoliPoViaDolorossa}
            />
            <Stack.Screen
               name="VChasKogdaTryba"
               component = {VChasKogdaTryba}
            />
            <Stack.Screen
               name="DerjitOnMenya"
               component = {DerjitOnMenya}
            />
            <Stack.Screen
               name="DoveryatTebe"
               component = {DoveryatTebe}
            />
            <Stack.Screen
               name="DolgMoyYplatil"
               component = {DolgMoyYplatil}
            />
            <Stack.Screen
               name="EstiNaNebeGorod"
               component = {EstiNaNebeGorod}
            />
            <Stack.Screen
               name="ZaLoveZaMilost"
               component = {ZaLoveZaMilost}
            />
            <Stack.Screen
               name="ZvezdDivnieAlmazi"
               component = {ZvezdDivnieAlmazi}
            />
            <Stack.Screen
               name="ZdeciNaZemle"
               component = {ZdeciNaZemle}
            />
            <Stack.Screen
               name="KakPrekrasno"
               component = {KakPrekrasno}
            />
            <Stack.Screen
               name="KakHorosho"
               component = {KakHorosho}
            />
            <Stack.Screen
               name="KraiChydeshu"
               component = {KraiChydeshu}
            />
            <Stack.Screen
               name="KtoJeYa"
               component = {KtoJeYa}
            />
            <Stack.Screen
               name="KtoMoraVse"
               component = {KtoMoraVse}
            />
            <Stack.Screen
               name="KydaBiYaIdtiHotel"
               component = {KydaBiYaIdtiHotel}
            />
            <Stack.Screen
               name="LybitJesusMenya"
               component = {LybitJesusMenya}
            />
            <Stack.Screen
               name="LybitEtoZnachit"
               component = {LybitEtoZnachit}
            />
            <Stack.Screen
               name="LoveChtoNePomnit"
               component = {LoveChtoNePomnit}
            />
            <Stack.Screen
               name="MilostiTvoey"
               component = {MilostiTvoey}
            />
            <Stack.Screen
               name="MoyaMolitva"
               component = {MoyaMolitva}
            />
            <Stack.Screen
               name="MiNygniDrygDrygy"
               component = {MiNygniDrygDrygy}
            />
            <Stack.Screen
               name="NaDalekomHolme"
               component = {NaDalekomHolme}
            />
            <Stack.Screen
               name="NadCerkovnimiKupolami"
               component = {NadCerkovnimiKupolami}
            />
            <Stack.Screen
               name="NaychiMenya"
               component = {NaychiMenya}
            />
            <Stack.Screen
               name="NeymryINoBydy"
               component = {NeymryINoBydy}
            />
            <Stack.Screen
               name="OdnaListva"
               component = {OdnaListva}
            />
            <Stack.Screen
               name="OtPogibeliSpasla"
               component = {OtPogibeliSpasla}
            />
            <Stack.Screen
               name="ProsipausNaZare"
               component = {ProsipausNaZare}
            />
            <Stack.Screen
               name="PustYgasloNebo"
               component = {PustYgasloNebo}
            />
            <Stack.Screen
               name="PytKGolgofe"
               component = {PytKGolgofe}
            />
            <Stack.Screen
               name="SvetomSvoim"
               component = {SvetomSvoim}
            />
            <Stack.Screen
               name="SkolkoEstiZamanchivih"
               component = {SkolkoEstiZamanchivih}
            />
            <Stack.Screen
               name="SkoroDayTotPridet"
               component = {SkoroDayTotPridet}
            />
            <Stack.Screen
               name="SkrouMenya"
               component = {SkrouMenya}
            />
            <Stack.Screen
               name="SonGodNamRojden"
               component = {SonGodNamRojden}
            />
            <Stack.Screen
               name="TamDaleko"
               component = {TamDaleko}
            />
            <Stack.Screen
               name="TiIskupilMir"
               component = {TiIskupilMir}
            />
            <Stack.Screen
               name="TiKydaIdesh"
               component = {TiKydaIdesh}
            />
            <Stack.Screen
               name="TiMenyaNapolni"
               component = {TiMenyaNapolni}
            />
            <Stack.Screen
               name="TiNePechalsya"
               component = {TiNePechalsya}
            />
            <Stack.Screen
               name="TiPrishelVEtotMir"
               component = {TiPrishelVEtotMir}
            />
            <Stack.Screen
               name="HristianinNesiOgon"
               component = {HristianinNesiOgon}
            />
            <Stack.Screen
               name="UnostSvetlya"
               component = {UnostSvetlya}
            />
         </Stack.Navigator>
      </NavigationContainer>

   );
}