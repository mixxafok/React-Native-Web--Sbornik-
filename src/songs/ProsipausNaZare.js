import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function ProsipausNaZare({navigation}) {
  
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
                  <Text style={styles.Accordes}>D   G{'\n'}</Text>
                  Просыпаюсь на заре{'\n'}
                  <Text style={styles.Accordes}>A   D   A/C#{'\n'}</Text>
                  И стремлюсь, мой Бог, к Тебе.{'\n'}
                  <Text style={styles.Accordes}>D  G{'\n'}</Text>
                  Верю, слышишь Ты меня,{'\n'}
                  <Text style={styles.Accordes}>A   D{'\n'}</Text>
                  Иисус, люблю Тебя.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>G   A{'\n'}</Text>
                  Я ищу Твои пути{'\n'}
                  <Text style={styles.Accordes}>F#m   Hm{'\n'}</Text>
                  И хочу по ним идти.{'\n'}
                  <Text style={styles.Accordes}>Em7   A   D   (A  D){'\n'}</Text>
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
