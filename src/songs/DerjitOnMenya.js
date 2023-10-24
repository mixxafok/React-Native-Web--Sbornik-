import React, { useState} from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function DerjitOnMenya({namSong}) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}       {major[4+start]}       {major[6+start]}       {major[11+start]}{'\n'}</Text>
                  Если грех меня страшит, Держит Он меня!{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}       {major[4+start]}       {major[6+start]}       {major[11+start]}{'\n'}</Text>
                  Вера в Бога победит: Держит Он меня. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}       {major[6+start]}       {major[11+start]}       {major[4+start]}       {major[6+start]}       {minor[8+start]} {'\n'}</Text>               
                  Чтобы мне не потерять вечного огня, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}       {major[6+start]}       {major[11+start]}         {major[4+start]}        {major[6+start]}       {major[11+start]} {'\n'}</Text>
                  Должен Он меня держать. Держит Он меня. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}       {major[6+start]}       {minor[8+start]}{'\n'}</Text>
                  Держит Он меня,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}       {major[6+start]}       {major[11+start]}{'\n'}</Text>
                  Держит Он меня.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}       {major[1+start]}       {major[11+start]}       {major[4+start]}{'\n'}</Text>
                  Охраняя и любя,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}       {major[6+start]}       {major[11+start]}{'\n'}</Text>
                  Держит Он меня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В крепких, любящих руках держит Он меня, {'\n'}
                  Дорог я в Его глазах: держит Он меня. {'\n'}
                  Он не даст погибнуть мне, сохранит вполне.{'\n'}
                  Обещания храня, держит Он меня. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  За меня страдал Христос, держит Он меня.{'\n'}
                  Наказание понес, держит Он меня. {'\n'}
                  Я воскресну к жизни с Ним — держит Он меня.{'\n'}
                  Знаю, буду им храним до благого дня.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
