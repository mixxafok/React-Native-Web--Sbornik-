import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function NaychiMenya({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em                 Am{'\n'}</Text>
                  Научи меня, мой Господь, во всём{'\n'}
                  <Text style={styles.Accordes}>H7                   Em{'\n'}</Text>
                  Волю исполнять лишь Твою.{'\n'}
                  <Text style={styles.Accordes}>Em                 Am{'\n'}</Text>
                  Чтобы мне по слову Твоему доказать,{'\n'}
                  <Text style={styles.Accordes}>H7                  Em{'\n'}</Text>
                  Как Тебя я, Спаситель, люблю{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am              D{'\n'}</Text>
                  Научи меня среди тысячи{'\n'}
                  <Text style={styles.Accordes}>G                   Em{'\n'}</Text>
                  Голос слышать лишь Твой,{'\n'}
                  <Text style={styles.Accordes}>Am           H7{'\n'}</Text>
                  Научи меня за Тобой идти{'\n'}
                  <Text style={styles.Accordes}>Em               D  G  E{'\n'}</Text>
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
