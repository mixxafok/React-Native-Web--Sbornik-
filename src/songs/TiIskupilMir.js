import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function TiIskupilMir( {namSong} ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}      {major[6+start]}      {minor[8+start]}{'\n'}</Text>
                  Ты искупил мир от греха,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}     {major[4+start]}{'\n'}</Text>
                  Ты дал ему любовь и свет,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}      {minor[1+start]}{'\n'}</Text>
                  Зажёг потухшие сердца{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}     {major[6+start]}{'\n'}</Text>
                  и дал надежду.{'\n'}
                  Мы пред Тобою предстоим {'\n'}
                  и каждый дорог для Тебя,{'\n'}
                  За всё, Отец, благодарим {'\n'}
                  и превозносим.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}     {major[6+start]}{'\n'}</Text>
                  Слава Тебе и величье, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}     {major[6+start]}{'\n'}</Text>
                  слава в веках и народах,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}     {major[11+start]}{'\n'}</Text>
                  Сила Твоя безгранична,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}     {major[6+start]}  ({major[11+start]}){'\n'}</Text>
                  Милость Твоя во все роды.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Ты открываешь новый мир {'\n'}
                  Любви, надежды, чистоты.{'\n'}
                  С Тобой не трудно мне идти, {'\n'}
                  Ведь Ты со мною.{'\n'}
                  Твоя любовь меня хранит,{'\n'}
                  Дает мне силу и покой,{'\n'}
                  И потому сердца людей{'\n'}
                  Полны хвалой!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Христа увидеть цель моя,{'\n'}
                  Об этом лишь мечтаю я. {'\n'}
                  И через бури и дожди,{'\n'}
                  Иду на встречу. {'\n'}
                  Ты Бог Царей и Бог рабов,{'\n'}
                  Ты бедных и богатых Бог, {'\n'}
                  Ты Бог неведомых миров,{'\n'}
                  Тебя я славлю!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Я больше не во власти зла{'\n'}
                  И не служу чужим богам. {'\n'}
                  Твой Свет дорогу указал{'\n'}
                  И я свободен. {'\n'}
                  К престолу славы прихожу{'\n'}
                  И не стыжусь поднять глаза, {'\n'}
                  Иисус меня от смерти спас{'\n'}
                  И дал свободу{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
