import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function VdoliPoViaDolorossa(  ) {
  
  const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          {/* <Image source={require('./../assets/menu.png')} style={styles.Menu}/> */}
       </View>

        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>              Em       D                C                H{'\n'}</Text>
                  Вдоль по Виа Долороса, на Голгофу по пути{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>         Em                         D                  C{'\n'}</Text>
                  К месту казни толпы жаждали пройти{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>     Am              Em           F#{'\n'}</Text>               
                  И солдаты расчищали дорогу{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>             H              Em{'\n'}</Text>
                  Скорби, грусти и тоски.{'\n'}
                  Кровь текла струёю алой {'\n'}
                  Осуждённого на смерть,{'\n'}
                  Разрывал венец терновый кости твердь{'\n'}
                  И презренье нёс Он тех,{'\n'}
                  Кто кричал, что совершил Он тяжкий грех. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}> E          Am        H    {'\n'}</Text>
                  Вдоль по Виа Долороса{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em            E7{'\n'}</Text>
                  По старадания пути,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>         Am               H                      E7{'\n'}</Text>
                  Шёл Мессия, словно Агнец нас спасти.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>       Am                H                   Em           D     C{'\n'}</Text>
                  Но Он выбрал ту дорогу, чтоб открыть нам небеса,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>      Em                    D           C      H  Em{'\n'}</Text>
                  Шёл Христос по Долороса за тебя и за меня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>                                                          
                  Он молчал, Он был спокоен,{'\n'}                                     
                  Хоть устал и изнемог,{'\n'}
                  Так молчать в смиреньи полном мог лишь Бог.{'\n'}
                  Не клемил Он палачей,{'\n'}
                  Но с любовью смотрел Он на людей. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев. {'\n'}{'\n'}</Text>

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  H                      C{'\n'}</Text>
                  А солнце палит и небо молчит,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>     D               H            Em  D    G   E{'\n'}</Text>
                  Оставлен Сын Божий Самим Отцом,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}> E          Am           H             Em                 E7{'\n'}</Text>               
                  Вдоль по Виа Долороса до холма на всём пути{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>          Am               H                E7 {'\n'}</Text>
                  Капли крови будто маки расцвели,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>      Am                  H                   Em          H   Em{'\n'}</Text>
                  Но Он выбрал ту дорогу, чтоб открыть нам небеса,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em                           D           C     H   Em{'\n'}</Text>               
                  Шёл Христос по Долороса за меня и за тебя.{'\n'}
              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
