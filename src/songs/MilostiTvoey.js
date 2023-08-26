import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function MilostiTvoey(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues'))
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Еm              А         A7{'\n'}</Text>
                  Милости Твоей полна вся Земля, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D                    Hm{'\n'}</Text>
                  Милости Твоей полна жизнь моя, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em                   F#{'\n'}</Text>               
                  Милость Свою Ты превознес над судом, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Hm           A              D{'\n'}</Text>
                  Возлюбил меня и ввел в Свой дом.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em       A     D     Hm {'\n'}</Text>
                  Ты спас меня и оправдал,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em               F#{'\n'}</Text>
                  Освободил от вины. (2 раза){'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Hm       Em    F#{'\n'}</Text>
                  Благодарю Тебя! (2 раза){'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
