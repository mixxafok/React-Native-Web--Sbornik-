import React, {useState,useEffect} from 'react';
    
import { Text, View, ScrollView, Image, Modal, TouchableWithoutFeedback, Switch, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles.js';
import { ListSongs } from './ListSongs.js';
import { useNavigate } from 'react-router-dom';
// import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

  const navigateTo = useNavigate();

  const [sliderValue, setSliderValue] = useState(18);
  const [ modalOpen , setModalOpen ] = useState (false);
  const [isEnabled, setIsEnabled] = useState(/*AsyncStorage.getItem('isssEnabled')*/ false);
  const toggleSwitch = () =>{
    setIsEnabled(!isEnabled);
    // SaveSwitch(!isEnabled);
  } 

//   const GetSwitch = async () => {
//    try{
//      let EnabledSwitch = await AsyncStorage.getItem('isssEnabled');
//      if (JSON.parse(EnabledSwitch) === false){
//      await setIsEnabled(false);
//      await SaveSwitch(false);
//        console.log(isEnabled)
//      }
//      if (JSON.parse(EnabledSwitch) === true){
//     await  setIsEnabled(true);
//     await  SaveSwitch(true);
//       console.log(isEnabled)
//     }
//    }catch (e){
//       console.log("Error");
//    }
//  }
 
//  const SaveSwitch = async (a) => {
//   try{
//      await AsyncStorage.setItem('isssEnabled', JSON.stringify(a));
//      console.log(JSON.stringify(isEnabled) + 'c')
//   }catch (e){
//      console.log("Errorrrr");
//   }
// }

// useEffect(()=>{
//   GetSwitch();
// },[])

  // if(isEnabled) { 

  //   styles.Accordes = [styles.AccordesDark, {fontSize: sliderValue}],
  //   styles.Song = [styles.SongDark,{fontSize: sliderValue}],
  //   styles.Couplet = [styles.Couplet, {fontSize: sliderValue}],
  //   styles.container = styles.containerDark
  //  } 
  // else { 

  //   styles.Accordes = [styles.AccordesLight, {fontSize: sliderValue}],
  //   styles.Song = [styles.SongLight,{fontSize: sliderValue}],
  //   styles.Couplet = [styles.Couplet, {fontSize: sliderValue}],
  //   styles.container = styles.containerLight
  // };



const songss = ListSongs.sort((a,b)=>{return a.title.localeCompare(b.title)}).map(item =>{
  return (
    <Text numberOfLines={item.id} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(item.id)}>{item.title}</Text>
  )
})

  const SongLoad1 = (it) => {
    if (it==1) navigateTo('/BlagoEsti');
    if (it==2) navigateTo('/VTebeGospod');
    if (it==3) navigateTo('/VChristeOdnom');
    if (it==4) navigateTo('/VChasKogdaTryba');
    // if (it==5) navigateTo('/VstaetZarya');
    // if (it==6) navigateTo('/DerjitOnMenya');
    // if (it==7) navigateTo('/DoveryatTebe');
    // if (it==8) navigateTo('/DolgMoyYplatil');
    // if (it==9) navigateTo('/EstiNaNebeGorod');
    // if (it==10) navigateTo('/ZaLoveZaMilost');
    // if (it==11) navigateTo('/ZvezdDivnieAlmazi');
    // if (it==12) navigateTo('/ZdeciNaZemle');
    // if (it==13) navigateTo('/KakPrekrasno');
    // if (it==14) navigateTo('/KakHorosho');
    // if (it==15) navigateTo('/KraiChydeshu');
    // if (it==16) navigateTo('/KtoJeYa');
    // if (it==17) navigateTo('/KtoMoraVse');
    // if (it==18) navigateTo('/KydaBiYaIdtiHotel');
    // if (it==19) navigateTo('/LybitJesusMenya');
    // if (it==20) navigateTo('/LybitEtoZnachit');
    // if (it==21) navigateTo('/LoveChtoNePomnit');
    // if (it==22) navigateTo('/MilostiTvoey');
    // if (it==23) navigateTo('/MiNygniDrygDrygy');
    // if (it==24) navigateTo('/MoyaMolitva');
    // if (it==25) navigateTo('/NaDalekomHolme');
    // if (it==26) navigateTo('/NadCerkovnimiKupolami');
    // if (it==27) navigateTo('/NaychiMenya');
    // if (it==28) navigateTo('/NeymryINoBydy');
    // if (it==29) navigateTo('/OdnaListva');
    // if (it==30) navigateTo('/OtPogibeliSpasla');
    // if (it==31) navigateTo('/ProsipausNaZare');
    // if (it==32) navigateTo('/PustYgasloNebo');
    // if (it==33) navigateTo('/PytKGolgofe');
    // if (it==34) navigateTo('/SvetomSvoim');
    // if (it==35) navigateTo('/SkolkoEstiZamanchivih');
    // if (it==36) navigateTo('/SkoroDayTotPridet');
    // if (it==37) navigateTo('/SkrouMenya');
    // if (it==38) navigateTo('/SonGodNamRojden');
    // if (it==39) navigateTo('/TamDaleko');
    // if (it==40) navigateTo('/TiIskupilMir');
    // if (it==41) navigateTo('/TiKydaIdesh');
    // if (it==42) navigateTo('/TiMenyaNapolni');
    // if (it==43) navigateTo('/TiNePechalsya');
    // if (it==44) navigateTo('/TiPrishelVEtotMir');
    // if (it==45) navigateTo('/HristianinNesiOgon');
    // if (it==46) navigateTo('/UnostSvetlya');
    // if (it==47) navigateTo('/VdoliPoViaDolorossa');
  }

  return (
    <View style={isEnabled ? styles.containerDark : styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.Pesni}>Песни</Text>
        <TouchableWithoutFeedback style={styles.button}  onPress={() => setModalOpen(!modalOpen)}>
          <Image source={require('./assets/menu.png')} style={styles.Menu1}/>     
        </TouchableWithoutFeedback>
      </View>

      <Modal visible={modalOpen} animationType='fade' transparent={true}>
        <TouchableOpacity activeOpacity={0} style={{flex:1}} onPress={() => { setModalOpen(false)}}>
          <View style={styles.modView}>
            <Text style={styles.modText}>Темная тема </Text>
            <Switch style={styles.modSwitch}
              onValueChange={toggleSwitch}
              value={isEnabled}
              
            /> 
            <Text style={styles.SliderText}>Размер текста : {sliderValue}</Text>
           <Slider
              style={styles.Slider}
              maximumValue={32}
              minimumValue={10}
              step={1}
              value={sliderValue}
              onSlidingComplete={(sliderValue) => setSliderValue(sliderValue)}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView>
        {songss}
      </ScrollView>

       
    </View>
  );
    
};
