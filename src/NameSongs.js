import React, {useState,useEffect} from 'react';
    
import { Text, View, ScrollView, Image, Modal, TouchableWithoutFeedback, Switch, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles.js';
import { ListSongs } from './ListSongs.js';
import { useNavigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function NameSongs({setNamSong}) {

  const navigateTo = useNavigate();

const [storage, setStorage] = useState({
  sliderValue: JSON.parse(localStorage.getItem('SliderValues')) || 18,
  switchValue: AsyncStorage.getItem('isssEnabled') 
})

  // const [sliderValue, setSliderValue] = useState(AsyncStorage.getItem('storage').slider);
  const [ modalOpen , setModalOpen ] = useState (false);
  // const [isEnabled, setIsEnabled] = useState(AsyncStorage.getItem('storage').switch );
  const toggleSwitch = () =>{
    setStorage({...storage, switchValue: !storage.switchValue});
    SaveSwitch(!storage.switchValue);
  } 
  // const toggleSlider = (valuse)=>{

  //   SaveSlider(valuse);
  // }

  const GetSwitch = async () => {
   try{
     let EnabledSwitch = await AsyncStorage.getItem('isssEnabled');
     if (JSON.parse(EnabledSwitch) == true){
      setStorage({...storage, switchValue: true});
      SaveSwitch(true);
      document.body.style.backgroundColor = "#121212"   
       console.log('storage')
     }
     if (JSON.parse(EnabledSwitch) == false){
      setStorage({...storage, switchValue: false});
      SaveSwitch(false);
      console.log('storage2')
      document.body.style.backgroundColor = "#eee"
    }
   }catch (e){
      console.log("Error get SWITCH");
   }
 }
 
 const SaveSwitch =  (a) => {
  try{
      AsyncStorage.setItem('isssEnabled', JSON.stringify(a));
     console.log(JSON.stringify(storage))
  }catch (e){
     console.log("Error save SWITCH");
  }
}

const GetSlider =  () => {
  try{
    let ValueSlider =  AsyncStorage.getItem('SliderValues');
    if (JSON.parse(ValueSlider) == ''){
      console.log('ValueLides = false')
    }
    if (JSON.parse(ValueSlider) != ''){
      setStorage({...storage, sliderValue: ValueSlider});
     // console.log(ValueSlider)
   }
  }catch (e){
     //console.log("Error get SLIDER");
  }

}

const SaveSlider = (b) => {
  setStorage({...storage, sliderValue: b});
 try{
     AsyncStorage.setItem('SliderValues', JSON.stringify(b));
    //console.log(JSON.stringify(storage))
 }catch (e){
    //console.log("Error save SLIDER ");
 }
}

useEffect( ()=>{
  GetSwitch();
  GetSlider();
},[])

const songss = ListSongs.sort((a,b)=>{return a.title.localeCompare(b.title)}).map((item, index) =>{
  return (
    <Text numberOfLines={1} ellipsizeMode='tail' style={storage.switchValue ? styles.NameSongsDark : styles.NameSongs}
     onClick={()=>SongLoad1(item.name, item.title, index)} >
     {index + 1 + '.'} {item.title}
    </Text>
  )
})

  const SongLoad1 = (it, tit, ind) => {
    setNamSong(ind + 1 + "." + " " + tit)
    navigateTo(`/${it}`)
   
  }

  return (
    <View style={storage.switchValue ? styles.containerDark : styles.containerLight}>

      <View style={styles.header}>
        <Text style={styles.Pesni}>Молодежный сборник</Text>
        <TouchableWithoutFeedback style={styles.button}  onPress={() => setModalOpen(!modalOpen)}>
          <Image source={require('./assets/menu.png')} style={styles.Menu1}/>     
        </TouchableWithoutFeedback>
      </View>

      <Modal visible={modalOpen} animationType='fade' transparent={true}>
        <TouchableOpacity activeOpacity={0} style={{flex:1}} onPress={() => { setModalOpen(!modalOpen)}}>
          <View style={styles.modView}>
            <Text style={styles.modText}>Темная тема </Text>
            <Switch style={styles.modSwitch}
              onValueChange={toggleSwitch}
              value={storage.switchValue}
              
            /> 
            <Text style={styles.SliderText}>Размер текста : {storage.sliderValue}</Text>
           <Slider
              style={styles.Slider}
              maximumValue={32}
              minimumValue={10}
              step={1}
              value={storage.sliderValue}
              onSlidingComplete={(val) => SaveSlider(val)}
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


