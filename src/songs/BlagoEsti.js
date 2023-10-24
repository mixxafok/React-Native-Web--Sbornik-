import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'


export default function BlagoEsti({namSong}) {

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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}       {minor[1+start]} {'\n'}</Text>
                  Благо есть славить Господа,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}7      {minor[8+start]}       {major[3+start]}7 {'\n'}</Text>
                  И петь имени Твоему, Всевышний{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}       {minor[1+start]} {'\n'}</Text>               
                  Возвещать утром милость Твою {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}7        {minor[8+start]} {'\n'}</Text>
                  И истину Твою вночи{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}      {minor[1+start]}       {major[6+start]} {'\n'}</Text>
                  Ты возвеселил душу мою,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}      {major[3+start]}7       {minor[8+start]} {'\n'}</Text>
                  Я Тебе, Господь, хвалу пою!{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[1+start]}       {major[3+start]}7 {'\n'}</Text>
                  Дела Твои велики, мой Отец,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}       {major[8+start]}{'\n'}</Text>
                  Ты мой Господь Ты мой Творец{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Возвожу мои очи к горам,{'\n'}
                  Возношу мои руки к небу.{'\n'}
                  Я познал, что Господь Велик,{'\n'}
                  И на земле превише всех{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Господи - Ты защита моя,{'\n'}
                  Ты мой Бог, Ты Твердыня жизни.{'\n'}
                  Над землёй, небеса высоко,{'\n'}
                  Слава Твоя во век веков.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           <StatusBar/>
 
     </View>
   );
     
 }
