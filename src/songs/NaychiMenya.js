import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function NaychiMenya(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em                 Am{'\n'}</Text>
                  Научи меня, мой Господь, во всём{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H7                   Em{'\n'}</Text>
                  Волю исполнять лишь Твою.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em                 Am{'\n'}</Text>
                  Чтобы мне по слову Твоему доказать,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H7                  Em{'\n'}</Text>
                  Как Тебя я, Спаситель, люблю{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am              D{'\n'}</Text>
                  Научи меня среди тысячи{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G                   Em{'\n'}</Text>
                  Голос слышать лишь Твой,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am           H7{'\n'}</Text>
                  Научи меня за Тобой идти{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em               D  G  E{'\n'}</Text>
                  В край желанный, дорогой.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Научи меня в грешном мире жить,{'\n'}
                  Чтобы свет Твой сиял во мне,{'\n'}
                  Где не может скрыться город большой,{'\n'}
                  Стоя на высокой горе.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Научи меня жизнь свою прожить,{'\n'}
                  Чтоб в конце услышать её:{'\n'}
                  Добрый верный раб скорее войди,{'\n'}
                  В радость Господина своего.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
