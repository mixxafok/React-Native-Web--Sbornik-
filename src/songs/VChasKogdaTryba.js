import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function VChasKogdaTryba(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G              C              G{'\n'}</Text>
                  В час, когда труба Господня над землёю прозвучит{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D{'\n'}</Text>
                  И настанет вечно светлая заря,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G             C             G{'\n'}</Text>               
                  Имена Он всех спасённых в перекличке повторит {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}> D                  G         (C  G){'\n'}</Text>
                  Там, по милости Господней, буду я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                {'\n'}</Text>
                  На небесной перекличке, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D{'\n'}</Text>
                  На небесной перекличке,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                         C{'\n'}</Text>
                  На небесной перекличке там, по {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                 D                   G{'\n'}</Text>
                  Милости Господней, буду я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В день блаженный воскресенья всех умерших во Христе,{'\n'}
                  Водворенья их в обители Царя,{'\n'}
                  Всех святых, омытых Кровию, пролитой на кресте,{'\n'}
                  Созовёт Он, и на зов отвечу я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Дай трудиться для Тебя, Господь, любовью всем служить,{'\n'}
                  С утра раннего и до заката дня.{'\n'}
                  А когда велишь работу мне земную Ты сложить,{'\n'}
                  На небесный клич тогда предстану я.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
