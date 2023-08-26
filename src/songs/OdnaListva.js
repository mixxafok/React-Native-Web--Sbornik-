import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function OdnaListva(  ) {
  
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
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Аm         Dm          Am{'\n'}</Text>
                  Одна листва, одна листва{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm       E          Am{'\n'}</Text>
                  От всех твоих трудов.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm                 G{'\n'}</Text>
                  Где плод посева твоего?{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                Am{'\n'}</Text>
                  Спаситель ждет его давно.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm{'\n'}</Text>
                  Ты не принес плода,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E                Dm{'\n'}</Text>
                  Одна листва…{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Одна листва, одна листва.{'\n'}
                  Как любишь ты Христа?{'\n'}
                  Тебя до смерти возлюбил,{'\n'}
                  Чем ты Иисусу заплатил?{'\n'}
                  Ты не принес плода,{'\n'}
                  Одна листва…{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Одна листва, одна листва,{'\n'}
                  Ты не принес плода.{'\n'}
                  Каким предстанешь пред судом{'\n'}
                  И что ответишь пред Христом?{'\n'}
                  Погибнешь навсегда,{'\n'}
                  Одна листва.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Одна листва, одна листва,{'\n'}
                  И лишь одни слова.{'\n'}
                  Господь грядет, а ты все спишь,{'\n'}
                  “Еще успею”, – говоришь.{'\n'}
                  Господь зовет:{'\n'}
                  “Вставай! Я жду плода”.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 5: {'\n'}</Text>
                  Одна листва, одна листва,{'\n'}
                  Но можно жить с плодом.{'\n'}
                  Я буду жить лишь для Христа,{'\n'}
                  Я буду радостным всегда.{'\n'}
                  Тогда на небеса приду с плодом.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
