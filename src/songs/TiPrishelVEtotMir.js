import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function TiPrishelVEtotMir(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em         Am{'\n'}</Text>
                  Ты пришёл в этот мир, и ты скоро уйдёшь,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H          Em{'\n'}</Text>
                  Счастлив будешь тогда, когда Бога найдёшь.{'\n'}{'\n'}


                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E          Am    D        G{'\n'}</Text>
                  Ветер, дождь и туман застилают глаза,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em        Am    H        Em{'\n'}</Text>
                  А ты всё же ищи Иисуса Христа.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Он один, Ты поверь, может свет тебе дать{'\n'}
                  И открыть сердца дверь, чтобы Бога познать.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Без Него жизни нет, лишь одна суета.{'\n'}
                  Бог даёт нам ответ, Он свершает дела.{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
