import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function NeymryINoBydy(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true); 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em    C     G     D {'\n'}</Text>
                  Не умру я, но буду жить истиной Твоей! {'\n'}
                  В тесноте я воззвал, Он услышал меня.{'\n'}
                  Окружили и сильно толкнули меня,{'\n'}
                  Но Господь поддержал, Он защита моя!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  Вот, Кому принадлежит вся жизнь моя, {'\n'}
                  Агнец Божий взял мой грех, дал распять Себя!{'\n'}
                  Вот, кому принадлежит вся жизнь моя,{'\n'}
                  С каждой раны Твоей крик - "Люблю тебя!"{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Ты мой Бог, и я буду вечно славить Тебя! {'\n'}
                  Ты - Тот Камень, который отвергли зря. {'\n'}
                  На Тебя уповать, лучше, чем на людей.{'\n'}
                  Благ и милостив Ты во всей жизни моей!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Сколько в жизни дорог я прошел не туда,{'\n'}
                  Сколько жизненных сил отняла суета.{'\n'}
                  Сколько раз - я не мог убежать от греха.{'\n'}
                  Но Господь меня спас - Он спасения скала!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Мой Господь - моя сила, спасение моё,{'\n'}
                  Отвори врата правды - и к Тебе я войду.{'\n'}
                  Гласом радости буду славить имя Твоё,{'\n'}
                  Поспеши же ко мне - и Тебя я найду!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
