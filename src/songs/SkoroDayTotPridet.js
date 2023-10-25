import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function SkoroDayTotPridet( {namSong} ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}          {major[3+start]}{'\n'}</Text>
                  Скоро день тот придет, и не будет всех забот,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}         {major[6+start]}         {major[11+start]}         {major[11+start]}7{'\n'}</Text>
                  Ни печали невзгод, ни нужды, ни тревог. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}         {minor[4+start]}         {major[11+start]}         {minor[8+start]}{'\n'}</Text>
                  Мир царит в стране святой, тьмы не будет никакой. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}         {major[6+start]}         {major[11+start]}         {major[11+start]}7{'\n'}</Text>
                  Что за день, радостный день будет там!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}         {minor[4+start]}         {major[11+start]}         {major[8+start]}{'\n'}</Text>
                  Что за день будет там, когда встречу я Христа! {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[1+start]}         {major[6+start]}         {major[11+start]}         {major[11+start]}7{'\n'}</Text>
                  Он возьмет меня с Собой в край небесный, не земной. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[4+start]}         {minor[4+start]}         {major[11+start]}         {minor[8+start]}{'\n'}</Text>
                  Руку даст Он мне Свою, и я с Ним туда пойду. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}         {major[6+start]}         {major[11+start]}{'\n'}</Text>
                  Что за день, радостный день будет там! {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Там не будет забот, Мир и радость не пройдет. {'\n'}
                  Ни болезнь, ни слеза, Радость будет без конца. {'\n'}
                  Буду вечно я тогда Прославлять Царя Христа. {'\n'}
                  Что за день, радостный день Будет там!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Скоро день тот придет, и не будет всех забот, {'\n'}
                  Ни печали невзгод, Ни нужды, ни тревог. {'\n'}
                  Мир царит в стране святой, Тьмы не будет никакой. {'\n'}
                  Что за день, радостный день Будет там!{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
