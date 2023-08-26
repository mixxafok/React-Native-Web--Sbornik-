import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function NadCerkovnimiKupolami(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am                    Dm{'\n'}</Text>
                  Над церковными куполами {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E                        Am{'\n'}</Text>
                  Небо синее-синее.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C      {'\n'}</Text>               
                  Я иду, под моими ногами  {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm                                E{'\n'}</Text>
                  Русь пролегла родимая.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am                             Dm {'\n'}</Text>
                  Тихим светом далёким светится{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                                C{'\n'}</Text>
                  Небо, звёздами озарённое,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F                       Dm {'\n'}</Text>
                  И легко душе моей верится{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F                  E         Am {'\n'}</Text>
                  В вечный рай, где живут спасённые.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В чистом небе поют херувимы,{'\n'}
                  Сердце бьется от счастья и радости.{'\n'}
                  Для меня этот мир любимый:{'\n'}
                  Полон света, добра и благости.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  На земле моя жизнь окончится,{'\n'}
                  Пролетит незаметно, как птица.{'\n'}
                  И мне очень, очень хочется{'\n'}
                  За Россию всегда молиться!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
