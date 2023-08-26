import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function KakHorosho({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am          C{'\n'}</Text>
                  Как хорошо, что со мною Спаситель,{'\n'}
                  <Text style={styles.Accordes}>Gm          Dm          Am/E{'\n'}</Text>
                  Вечный Творец, Он так любит меня! {'\n'}
                  <Text style={styles.Accordes}>Am          Dm{'\n'}</Text>
                  В жизни моей Он - мой Друг и Хранитель, {'\n'}
                  <Text style={styles.Accordes}>Am          E           Am/E{'\n'}</Text>
                  Всюду со мной, среди ночи и дня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Где бы ни шла моей жизни дорога.  {'\n'}
                  Буду я жить для Иисуса Христа,  {'\n'}
                  Мне не страшна никакая тревога. {'\n'}
                  Верю Ему, в Нем любви полнота.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Путь наш суров, устаем временами. {'\n'}
                  Движемся мы по житейским волнам. {'\n'}
                  Скоро придет наш Спаситель за нами,  {'\n'}
                  Будет конец нашим бедам, скорбям.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
