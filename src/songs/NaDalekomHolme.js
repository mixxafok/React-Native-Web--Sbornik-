import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function NaDalekomHolme(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am          Dm    E           Am{'\n'}</Text>
                  На далёком холме средь деревьев и скал,  {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm    G           C     Am{'\n'}</Text>
                  Сквозь седые века, старый крест простоял.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm    E           Am{'\n'}</Text>
                  Миллионы людей у подножья креста  {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F           E{'\n'}</Text>
                  Свое счастье нашли. Там однажды был я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm          E           Am {'\n'}</Text>
                  Старый крест, старый крест, не броский, но лишь в нём{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm          G           C           A7{'\n'}</Text>
                  Сила есть, сила есть. Сегодня может он{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm          Am          F{'\n'}</Text>
                  Исцелять разбитые, больные сердца,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm          F           E           Am{'\n'}</Text>
                  Каждому пришедшему открыть небеса.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Между небом святым и греховной землёй {'\n'}
                  Пропасть злая лежит, разделяя собой. {'\n'}
                  Хочешь - верь, хочешь - нет, слушай слово {'\n'}
                  Творца: Крест - единственный мост от земли в небеса.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  О, Иисус дорогой, у подножья креста {'\n'}
                  Сквозь седые века я увидел Тебя: {'\n'}
                  На пронзённых руках незастывшая кровь, {'\n'}
                  А в прекрасных глазах Божья к людям любовь.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
