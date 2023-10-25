import React, { useState} from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function KtoJeYa( {namSong} ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} {'\n'}</Text>
                  Кто же я, что Царя Вселенной всей {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[10+start]}          {major[8+start]}     {major[10+start]}          {major[8+start]}     {major[10+start]}{'\n'}</Text>
                  Волнует боль моя и мир в душе моей? {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} {'\n'}</Text>
                  Кто же я, что чудесный Божий свет {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[10+start]}          {major[8+start]}     {major[10+start]}          {major[8+start]}     {major[10+start]}{'\n'}</Text>
                  Ведет меня всегда, когда мира в сердце нет? {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Мост: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}           {major[10+start]}          {minor[12+start]}            {major[10+start]}/{major[2+start]} {'\n'}</Text>
                  Не за то, что сделал я, но по милости Твоей. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[12+start]}            {major[10+start]}/{major[2+start]}          {major[8+start]}           {major[10+start]} {'\n'}</Text>
                  Не за все мои дела Ты любовь даруешь мне. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} {'\n'}</Text>
                  Я - лишь цветок, что расцветает {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[10+start]}          {major[8+start]} {'\n'}</Text>
                  И мгновенно увядает. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[10+start]}          {major[8+start]}           {major[10+start]} {'\n'}</Text>
                  Пришел в мир и исчезну, как утренний туман. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}           {major[3+start]}/{major[2+start]}           {minor[12+start]} {'\n'}</Text>
                  Но Ты мольбам моим внимаешь. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[10+start]}          {major[8+start]} {'\n'}</Text>
                  Если упаду, прощаешь.  {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[10+start]}          {major[8+start]}           {major[3+start]}     {major[8+start]}    {minor[12+start]}    {major[10+start]}{'\n'}</Text>
                  Ты сказал мне, что я  Твой, навсегда, навсегда. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Кто же я, что Всевидящий Господь,  {'\n'}
                  Простив мои грехи, дарует мне любовь? {'\n'}
                  Кто же я, чтобы Бог, смиривший шторм, {'\n'}
                  Дарил мне Свой покой, когда вокруг лишь зло?{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
