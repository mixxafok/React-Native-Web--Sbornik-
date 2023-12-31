import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function SvetomSvoim( {namSong} ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  const [start, setStart]= useState(0)
  const [ modalOpen , setModalOpen ] = useState (false);
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.concretSong}>{namSong}</Text>
          <TouchableWithoutFeedback style={{paddingBottom: '2px'}} onPress={() => { setModalOpen(!modalOpen)}}>
            <Image  source={Music} style={styles.music} />
          </TouchableWithoutFeedback>
          <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>
 
       <View style={modalOpen ? styles.modViewChords : {display:"none"}}>
          <Text style={styles.ChordsEdit1} >
            <Text style={styles.chordsTon} onPress={()=>getTon(-1,{setStart})}>- </Text> {start} <Text onPress={()=>getTon(1,{setStart})}> +</Text>
          </Text>
        </View>

        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}         {major[3+start]}         {minor[10+start]}        A{'\n'}</Text>
                  Светом Своим Ты прогнал сумрак ночи,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}         {major[3+start]}         {major[1+start]}{'\n'}</Text>
                  И мне глаза Ты открыл.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}         {major[3+start]}        {minor[10+start]}         A{'\n'}</Text>
                  Всю свою жизнь я хочу быть с Тобою,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}         {major[3+start]}         {major[1+start]}{'\n'}</Text>
                  Надежду Ты подарил.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}         {major[3+start]}{'\n'}</Text>
                  Здесь я, чтобы славить, пред Тобой склониться{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[5+start]}         {major[1+start]}{'\n'}</Text>
                  И сказать Тебе, что Ты - мой Бог.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}         {major[3+start]}{'\n'}</Text>
                  Ты один достоин, кто с Тобой сравнится?{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[5+start]}         {major[1+start]}{'\n'}</Text>
                  Кто так возлюбить меня бы смог?{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Царь всех царей, высоко вознесённый,{'\n'}
                  Прославленный в Небесах!{'\n'}
                  С Неба сошёл Ты, чтоб дать нам спасение,{'\n'}
                  Унижен Ты был ради нас.{'\n'}{'\n'}


              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
