import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function NeperechestiNam() {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0) 

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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                  F                                           Dm{'\n'}</Text>
                  Не перечесть нам милостей Господних-    {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>           Bb                                               C{'\n'}</Text>
                  Им счёта нет и нет у них конца.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                     F                                     Dm{'\n'}</Text>
                  И мы приходим в этот день сегодня,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>          Bb                      C                     F{'\n'}</Text>
                  Чтобы прославить нашего Отца.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                     Bb                                 C{'\n'}</Text>
                  Он любит нас в любое время года,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                          Bb                             Am{'\n'}</Text>
                  На всяком месте и во всякий час.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                 Bb        D                    Gm{'\n'}</Text>
                  И если славит Господа природа,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>        Bb                     C                        F{'\n'}</Text>
                  То дети Божьи могут ли молчать?{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В благоговеньи мы Отцу приносим{'\n'}
                  Слова молитвы - жертву наших уст.{'\n'}
                  Как Бог благословил и эту осень!{'\n'}
                  Пусть каждый дом не будет ныне пуст.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  За то, что в каждом доме много хлеба,{'\n'}
                  За то, что нас простил и спас Христос,{'\n'}
                  Пусть хор людей спасённых славит небо,{'\n'}
                  И пенье вознесется выше звёзд.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am              D{'\n'}</Text>
                  Сердца у всех стучат одним биением,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                   Em{'\n'}</Text>
                  Христу достойно Славу воздают{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am           H7{'\n'}</Text>
                  И голоса, сливаясь строенным пеньем,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em               D  G  E{'\n'}</Text>
                  Пусть "Аллилуйя" Господу поют...{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
