import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function TiIskupilMir(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues')) 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>

        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G      D      Em{'\n'}</Text>
                  Ты искупил мир от греха,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     C{'\n'}</Text>
                  Ты дал ему любовь и свет,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C      Am{'\n'}</Text>
                  Зажёг потухшие сердца{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am     D{'\n'}</Text>
                  и дал надежду.{'\n'}
                  Мы пред Тобою предстоим {'\n'}
                  и каждый дорог для Тебя,{'\n'}
                  За всё, Отец, благодарим {'\n'}
                  и превозносим.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G     D{'\n'}</Text>
                  Слава Тебе и величье, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     D{'\n'}</Text>
                  слава в веках и народах,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C     G{'\n'}</Text>
                  Сила Твоя безгранична,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am     D  (G){'\n'}</Text>
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
                  И дал свободу{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
