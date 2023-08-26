import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function TiNePechalsya({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em     C     D     G{'\n'}</Text>
                  Я постигаю сквозь слезы и боль{'\n'}
                  <Text style={styles.Accordes}>C     Am     B7     Em{'\n'}</Text>
                  Радость встречи и горечь разлуки.{'\n'}
                  <Text style={styles.Accordes}>Em     C     D     G{'\n'}</Text>
                  Пью эту чашу, где сладость и соль,{'\n'}
                  <Text style={styles.Accordes}>C     Am     B7     Em{'\n'}</Text>
                  Перемешались надежда и муки.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Em     Am     D     G{'\n'}</Text>
                  Ты не печалься, не беспокойся,{'\n'}
                  <Text style={styles.Accordes}>Em     Am     H7     Em{'\n'}</Text>
                  Если Бог с нами - чего бояться?{'\n'}
                  <Text style={styles.Accordes}>Em     Am     D     G{'\n'}</Text>
                  Ты не печалься, не беспокойся,{'\n'}
                  <Text style={styles.Accordes}>Em     Am     H7     Em{'\n'}</Text>
                  Если Бог с нами.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Свободу ищу из железных оков, {'\n'}
                  Тех, что зовутся житейское счастье. {'\n'}
                  Вся моя жизнь - это несколько слов{'\n'}
                  В тихой молитве перед причастьем.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  И не жалея о прошлом ничуть,{'\n'}
                  Вижу как катится мир к катастрофе.{'\n'}
                  Верую в крестный мной избранный путь,{'\n'}
                  В тайну распятой любви на Голгофе.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
