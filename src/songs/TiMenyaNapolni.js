import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function TiMenyaNapolni( {namSong} ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}    {major[3+start]}    {major[1+start]}    {major[3+start]}{'\n'}</Text>
                  Ты меня наполни святостью Твоей,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}    {major[3+start]}    {major[1+start]}{'\n'}</Text>
                  Пусть меня исполнит Дух Твой как елей.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}    {minor[5+start]}    {major[1+start]}    {major[8+start]}{'\n'}</Text>
                  Я всего лишь человек, словно пыль перед Тобой,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[1+start]}    {major[3+start]}    {major[8+start]}{'\n'}</Text>
                  Но в Твоих руках я нахожу покой.{'\n'}
                  Ты всегда был рядом, когда я страдал,{'\n'}
                  Посылал надежду, веру укреплял.{'\n'}
                  И нет слов, чтоб описать полноту любви Твоей,{'\n'}
                  Как прекрасен Ты Господь души моей.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}    {major[1+start]}{'\n'}</Text>
                  Ты скажи мне Боже кто я есть{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}    {major[8+start]}{'\n'}</Text>
                  По сравнению с Тобой,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[8+start]}    {major[1+start]}{'\n'}</Text>
                  Ты светящий , яркий солнца свет{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}    {major[8+start]}{'\n'}</Text>
                  Можешь скрыть своей рукой,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[5+start]}    {major[1+start]}{'\n'}</Text>
                  И сиянье неба и дождя {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}    {major[8+start]}{'\n'}</Text>
                  И росток в сухой земле{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[5+start]}   {major[1+start]}{'\n'}</Text>
                  Мне ответят снова, что нигде{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[3+start]}    {major[8+start]}{'\n'}</Text>
                  Нет подобного Тебе!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Я нашёл свободу став Твоим рабом,{'\n'}
                  Я обрёл спасенье став Твоим детём{'\n'}
                  Мои сердце и любовь я кладу к ногам Твоим,{'\n'}
                  Только Ты достоин славы и хвалы!{'\n'}
                  Твоё Имя велико по всей земле,{'\n'}
                  Твоя слава не смолкает в вышине.{'\n'}
                  Пусть ещё одна душа вдруг увидит и поймёт,{'\n'}
                  Что её Создатель в небесах живёт.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
