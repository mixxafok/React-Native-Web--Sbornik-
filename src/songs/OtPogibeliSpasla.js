import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function OtPogibeliSpasla(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm                           Gm{'\n'}</Text>
                  От погибели спасла меня Милость Божия,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C  A                         Dm{'\n'}</Text>
                  В дне отчаянья нашла меня Милость Божия.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Cm                                        D{'\n'}</Text>
                  То, что я ещё живу, то, что Господу служу,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Gm     A                              Dm{'\n'}</Text>
                  Это милость Божия, это милость Божия.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Что грехи мои Он смыл, это милость Божия,{'\n'}
                  И Свой Дух Святой излил - это милость Божия.{'\n'}
                  То, что вера мне дана и ведёт меня она,{'\n'}
                  Это милость Божия, это милость Божия.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Вновь и вновь благодарю эту милость Божию{'\n'}
                  И желанием горю славить милость Божию,{'\n'}
                  Эту бездну доброты, эту силу чистоты,{'\n'}
                  Эту милость Божию, эту милость Божию.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Всё однажды здесь пройдёт, даже милость Божия,{'\n'}
                  От земли Бог заберёт  Свою милость Божию.{'\n'}
                  Там где место для святых будет вечно им светить{'\n'}
                  Это милость Божия, это милость Божия.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 5: {'\n'}</Text>
                  От погибели спасла меня Милость Божия,{'\n'}
                  В день отчаянья нашла меня Милость Божия.{'\n'}
                  То, что я ещё живу, то, что Господу служу,{'\n'}
                  Это милость Божия, Это милость Божия.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
