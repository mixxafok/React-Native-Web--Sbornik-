import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function SkrouMenya({navigation}) {
  
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
                  <Text style={styles.Accordes}>C   G   Am      F   D   G{'\n'}</Text>
                  Скрой меня, Своим крылом,{'\n'}
                  Сохрани, под сильною рукой!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>F         G         C {'\n'}</Text>
                  Пусть бушует шторм и гром гремит,{'\n'}
                  <Text style={styles.Accordes}>F         G         Am {'\n'}</Text>
                  Над бурей буду я с Тобой парить,{'\n'}
                  <Text style={styles.Accordes}>F         G         C{'\n'}</Text>
                  Мой Отец Ты Царь над всей Землей,{'\n'}
                  <Text style={styles.Accordes}>F         G         С {'\n'}</Text>
                  Я не боюсь, мой Бог со мной.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Найду покой, В Тебе Христос,{'\n'}
                  Верю я, в могущество Твоё!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
