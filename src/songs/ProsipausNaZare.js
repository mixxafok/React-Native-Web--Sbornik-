import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function ProsipausNaZare(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D   G{'\n'}</Text>
                  Просыпаюсь на заре{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>A   D   A/C#{'\n'}</Text>
                  И стремлюсь, мой Бог, к Тебе.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D  G{'\n'}</Text>
                  Верю, слышишь Ты меня,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>A   D{'\n'}</Text>
                  Иисус, люблю Тебя.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G   A{'\n'}</Text>
                  Я ищу Твои пути{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#m   Hm{'\n'}</Text>
                  И хочу по ним идти.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em7   A   D   (A  D){'\n'}</Text>
                  Надо мной, Господь, Твоя рука.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Вижу все Твои дела,{'\n'}
                  И поёт душа моя,{'\n'}
                  Каждый день к Тебе ведёт;{'\n'}
                  В сердце праведность живёт.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
