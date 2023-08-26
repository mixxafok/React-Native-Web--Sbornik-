import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function KydaBiYaIdtiHotel(  ) {
  
  const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em   Am{'\n'}</Text>
                  Куда бы я идти хотел, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D   G{'\n'}</Text>
                  Я знаю, что Ты там,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C   Am{'\n'}</Text>
                  И в море тёмном, и в вышине —{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D   G{'\n'}</Text>
                  Везде Ты близок к нам.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G   C   G{'\n'}</Text>
                  Ведь пред Тобой открыто всё, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am7   G{'\n'}</Text>
                  Нам нечего таить, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C   Am{'\n'}</Text>
                  И сердца помышления {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D   D7{'\n'}</Text>
                  Ты можешь все узреть. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  И пред моим рождением,{'\n'}
                  Господь, Ты знал меня,{'\n'}
                  Твоя рука пронзённая{'\n'}
                  К Тебе влечёт меня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Господь, ведь вся вселенная{'\n'}
                  Есть дело Твоих рук, {'\n'}
                  Прославить я хочу Тебя, {'\n'}
                  Мой Бог, как Ты велик.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
