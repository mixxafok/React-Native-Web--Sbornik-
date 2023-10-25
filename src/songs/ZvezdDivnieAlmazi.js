import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function ZvezdDivnieAlmazi( {namSong} ) {
  
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
                  <Text style={styles.Couplet } >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {minor[3+start]}  {'\n'}</Text>
                  Что этот свет? Он - созданье Всевышнего, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {major[11+start]}      {'\n'}</Text>
                  Воля и Разум Творца. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {major[6+start]}                        {major[1+start]} {'\n'}</Text>               
                  Это ль не есть выражение Божьей любви?  {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>   {major[3+start]} {'\n'}</Text>
                  Горы, равнины и дали лесистые, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {major[11+start]}{'\n'}</Text>
                  Скалы, овраги и травы душистые, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {minor[8+start]}     {'\n'}</Text>               
                  Утра румянец и ночи мерцание - {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {major[1+start]}                 {major[10+start]}   {'\n'}</Text>
                  Бога создание, Бога дыхание. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}   {'\n'}</Text>
                  Звёзд дивные алмазы на чёрный бархат неба {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}{'\n'}</Text>
                  Ты поместил Своей рукой, поместил Своей рукой.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}{'\n'}</Text>
                  Нет, я ещё ни разу столь к Тебе близок не был.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {minor[3+start]}        {major[11+start]}        {major[6+start]}           {major[10+start]}          {minor[3+start]}{'\n'}</Text>
                  Ты подарил душе покой, подарил душе покой.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Что этот мрак, силы тёмной сгущение, {'\n'}
                  Вечно скрывает свой лик?           {'\n'}                                                           
                  Слава, Отец, что не ею дано нам спастись!    {'\n'}                                     
                  Солнце взойдёт , тучи черные скроются, {'\n'}
                  Земли водой дождевою омоются, {'\n'}
                  Птицы небесные песню Тебе поют, {'\n'}
                  Имя Твое облекая в гармонию! {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Что эта жизнь - Божий дар и служение,  {'\n'}
                  Радость и мука души.              {'\n'}                                                           
                  Где ты найдёшь совокупность столь разных в одном?   {'\n'}    
                  Пусть из страданий и счастье строится, {'\n'}
                  Лишь после смерти награда откроется.       {'\n'}                             
                  Чаша скорбей производит терпение, {'\n'}
                  Вся наша жизнь на земле - лишь мгновение!{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
