import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function SkolkoEstiZamanchivih(  ) {
  
     const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>             Fm                   Bbm{'\n'}</Text>
                  Сколько есть заманчивых дорог,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>             C                Fm{'\n'}</Text>
                  Ты от них храни нас, вечный Бог,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>      Fm             Bbm{'\n'}</Text>
                  И веди нас жизненной тропой{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>         Dm7                C{'\n'}</Text>
                  По стезям колючим за Собой.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>    Fm                Bbm{'\n'}</Text>
                  За Тобой пойду я сквозь туман.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>   Eb                   Ab{'\n'}</Text>
                  Не беда, что кровь течет из ран,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  Db             Bbm{'\n'}</Text>
                  Впереди меня Ты Сам идешь{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>   C{'\n'}</Text>
                  И меня в обители ведешь.{'\n'}
                  Сквозь туман сквозь жизни угаган{'\n'}
                  За Тобой иду я в Ханаан,{'\n'}
                  В жизни Ты меня, мой Бог, храни,{'\n'}
                  Силу дай вперед всегда идти.{'\n'}{'\n'}


                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Если Божий Дух в твоей груди, -{'\n'}
                  Встретишь ты преграды на пути.{'\n'}
                  Но как счастлив тот, кто пронесет{'\n'}
                  Верность Богу сквозь кольцо невзгод.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Так веди ж меня Своей тропой,{'\n'}
                  Напояй живительной водой.{'\n'}
                  Дай мне силы лишь Тобою жить,{'\n'}
                  Жаждущих водой Твоей поить.{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
