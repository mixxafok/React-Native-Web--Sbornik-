import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function PustYgasloNebo(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am     F     Am     F{'\n'}</Text>
                  Пусть угасло небо, пусть померк рассвет,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am     F     Am     F{'\n'}</Text>
                  Пусть умолкли люди, пусть молчат в ответ{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm     G{'\n'}</Text>
                  На любовь Твою.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am     F     Am   F     C{'\n'}</Text>
                  Но шелестом дождя, песнею ручья{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G     Am{'\n'}</Text>
                  Для Тебя, Господь,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F     Am   F     C{'\n'}</Text>
                  Из сердца в небеса льется песнь моя,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G     Am{'\n'}</Text>
                  Песня без конца.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Да, кругом раздоры, Да и Ты забыт,{'\n'}
                  Люди прочь уходят в путь, что тьмой покрыт,{'\n'}
                  Где Ты забыт.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Ты придёшь и навсегда yмолкнет грех. {'\n'}
                  Там, где темнота была,Сияет свет,{'\n'}
                  Bечный свет{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
