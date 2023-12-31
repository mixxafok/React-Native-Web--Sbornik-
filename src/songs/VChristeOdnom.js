import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function VChristeOdnom( {namSong} ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}                {major[6+start]}         {major[11+start]}               {major[1+start]}          {'\n'}</Text>
                  В Христе одном надежда есть,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[6+start]}           {major[11+start]}            {major[1+start]}           {major[6+start]}{'\n'}</Text>
                  Вся моя жизнь и сила в Нём.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}                      {major[6+start]}              {major[11+start]}      {major[1+start]}       {'\n'}</Text>               
                  Он - Камень мой, скала и песнь – {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[6+start]}                   {major[11+start]}                     {major[1+start]}             {major[6+start]}{'\n'}</Text>
                  надежный  спутник в страшный шторм{'\n'}{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}   {minor[3+start]}       {major[1+start]} {'\n'}</Text>
                  Как высока любовь Его. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[6+start]}                {major[11+start]}      {minor[3+start]}     {major[1+start]}{'\n'}</Text>
                  Как мир глубок, как с Ним легко. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[11+start]}                 {major[6+start]}                {major[11+start]}          {major[1+start]}  {'\n'}</Text>
                  Мой Утешитель – Всё во всём,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{major[6+start]}           {major[11+start]}      {major[1+start]}               {major[6+start]}{'\n'}</Text>
                  Моя опора только в Нём.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В Христе одном, принявшем плоть, {'\n'}
                  Открылся всемогущий Бог.{'\n'}
                  Но дар любви что дал Господь,{'\n'}
                  Отверг народ, избрав порок.{'\n'}
                  Он на кресте Себя отдал,  {'\n'}
                  В смиреньи гнев Отца принял{'\n'}
                  Мой грех на плечи возложил {'\n'}
                  Чтобы Его я смертью жил{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  В земле, как все, Он мёртвым был {'\n'}
                  Объят был тьмою свет небес.{'\n'}
                  Но в третий день Он победил, {'\n'}
                  Из гроба мрачного воскрес{'\n'}
                  Он Бог и победитель всех {'\n'}
                  Уже не правит больше грех.{'\n'}
                  Навеки Он хозяин мой{'\n'}
                  Я куплен кровию святой{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Нет страха смерти, нет вины, {'\n'}
                  Всё только силою Христа.{'\n'}
                  От первых дней, до седины {'\n'}
                  До смерти, в Нём моя судьба.{'\n'}
                  Нет никого и ничего {'\n'}
                  Что вырвет из руки Его{'\n'}
                  Он приведёт меня в Свой дом {'\n'}
                  Моя опора только в Нём{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }

 
