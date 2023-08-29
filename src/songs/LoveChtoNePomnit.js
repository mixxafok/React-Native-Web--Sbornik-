import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function LoveChtoNePomnit(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                   F                C{'\n'}</Text>
                  Любовь, что не помнит неправды людской,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                   C                F              G{'\n'}</Text>
                  Всё зная, не полнит наш список долгов,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                                  G                        F{'\n'}</Text>
                   Бросает их в море без дна, берегов, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F                                  G                        C{'\n'}</Text>
                  Ведь милость Господня превыше грехов!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  О, как долготерпит заблудших и ждёт,{'\n'}
                  Отец, что так нежно домой нас зовёт. {'\n'}
                  Злых, немощных, бедных, принять Он готов, {'\n'}
                  Ведь милость Господня превыше грехов.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F    C    G         F          C          G{'\n'}</Text>
                  Славен Бог, ведь милость Его,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F                  C                G            C{'\n'}</Text>
                   Каждое утро тьму гонит прочь,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F                  C                G            C{'\n'}</Text>
                   Ведь милость Господня, превыше грехов.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Как щедро на нас расточил Он добро,{'\n'}
                  Ценой стала Жизнь, а оплатою - Кровь. {'\n'}
                  Печальная участь ждала должников –{'\n'}
                  Но милость Господня превыше грехов!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Любовь, что не помнит неправды людской, {'\n'}
                  Всё зная, не полнит наш список долгов,{'\n'}
                  Бросает их в море без дна, берегов,{'\n'}
                  Ведь милость Господня превыше грехов!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
