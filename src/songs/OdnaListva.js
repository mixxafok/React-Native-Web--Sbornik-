import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function OdnaListva({navigation}) {
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={styles.Song} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={styles.Accordes}>Аm         Dm          Am{'\n'}</Text>
                  Одна листва, одна листва{'\n'}
                  <Text style={styles.Accordes}>Dm       E          Am{'\n'}</Text>
                  От всех твоих трудов.{'\n'}
                  <Text style={styles.Accordes}>Dm                 G{'\n'}</Text>
                  Где плод посева твоего?{'\n'}
                  <Text style={styles.Accordes}>C                Am{'\n'}</Text>
                  Спаситель ждет его давно.{'\n'}
                  <Text style={styles.Accordes}>Dm{'\n'}</Text>
                  Ты не принес плода,{'\n'}
                  <Text style={styles.Accordes}>E                Dm{'\n'}</Text>
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
