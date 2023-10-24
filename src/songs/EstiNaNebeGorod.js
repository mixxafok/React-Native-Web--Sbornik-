import React, { useState} from 'react';
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function EstiNaNebeGorod( {namSong} ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}       {minor[6+start]}    {major[8+start]}       {minor[1+start]} {'\n'}</Text>
                  Есть на небе город, чудный город света,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[9+start]}    {minor[11+start]}       {minor[4+start]} {'\n'}</Text>
                  Там нужды болезни и печали нету.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}       {minor[6+start]}   {minor[11+start]}       {minor[4+start]} {'\n'}</Text>
                  Там Живут святые, там играют гусли, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}        {minor[8+start]} {'\n'}</Text>
                  Воспевая славу Господу Иисусу.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}       {minor[6+start]} {'\n'}</Text>
                  Болезни там нет, не гаснет там свет, Иерусалим.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[11+start]}       {minor[4+start]}       {minor[6+start]}{'\n'}</Text>
                  Там вечно живут, там песни поют, Иерусалим.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}       {minor[6+start]} {'\n'}</Text>
                  Ты город живых, ты город святых, Иерусалим.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}       {minor[6+start]}       {minor[1+start]}    {minor[6+start]} {'\n'}</Text>
                  К тебе я стремлюсь, с тобой я сольюсь, Иерусалим.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Золотом обложен город тот прекрасный,{'\n'}
                  Лишь в тебе, Иерусалим, вечно буду счастлив.{'\n'}
                  Жизнь мою преобрази здесь, в земной долине,{'\n'}
                  Чтоб покой душе найти в Иерусалиме.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Братья мои, сёстры, там мы будем вместе{'\n'}
                  Воспевать Иисусу радостные песни.{'\n'}
                  Так давайте ж на земле вместе славить Бога,{'\n'}
                  Чтобы стала нам светлей в небеса дорога.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
