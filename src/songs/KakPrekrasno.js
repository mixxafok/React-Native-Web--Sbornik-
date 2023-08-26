import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function KakPrekrasno({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am{'\n'}</Text>
                  Как прекрасно все то, что Твое,{'\n'}
                  <Text style={styles.Accordes}>Dm{'\n'}</Text>
                  Мне повсюду Твой слышится голос.{'\n'}
                  <Text style={styles.Accordes}>G7 {'\n'}</Text>
                  Ветром в листьях звенит и поет,  {'\n'}
                  <Text style={styles.Accordes}>Am {'\n'}</Text>
                  В сердце шепчет, как зреющий колос.  {'\n'}
                  <Text style={styles.Accordes}>Am{'\n'}</Text>
                  Эти горы, покрытые мхом, {'\n'}
                  <Text style={styles.Accordes}>Dm{'\n'}</Text>
                  Эти волны, покрытые пеной,{'\n'}
                  <Text style={styles.Accordes}>F{'\n'}</Text>
                  Этот берег с горячим песком,  {'\n'}
                  <Text style={styles.Accordes}>E{'\n'}</Text>
                  Это солнце в бескрайней Вселенной.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am{'\n'}</Text>
                  Боже мой, это - Ты, это - Ты, {'\n'}
                  <Text style={styles.Accordes}>Dm{'\n'}</Text>
                  Я с Тобою повсюду встречаюсь: {'\n'}
                  <Text style={styles.Accordes}>G{'\n'}</Text>
                  Когда рву мимоходом цветы {'\n'}
                  <Text style={styles.Accordes}>Am(F)        (E)         E (Am){'\n'}</Text>
                  И на чей-то поклон отвечаю.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Мне повсюду видна Твоя кисть. {'\n'}
                  Твой резец и Твой почерк с размахом: {'\n'}
                  В детском взоре, что светел и чист, {'\n'}
                  И в цветущих на поле ромашках. {'\n'}
                  Это Ты нам даруешь друзей, {'\n'}
                  Это Ты научил нас трудиться. {'\n'}
                  Потому я хочу все сильней {'\n'}
                  И все чаще, усердней молиться.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Это Ты меня петь научил, {'\n'}
                  Потому моя песнь не смолкает. {'\n'}
                  Это Ты в меня свет Твой пролил. {'\n'}
                  Он и в вечности не угасает. {'\n'}
                  Как прекрасно все то, что Твое, {'\n'}
                  Пред величьем Твоим я немею. {'\n'}
                  Это Ты мне. Спаситель, даешь {'\n'}
                  Все то доброе, что я имею.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
