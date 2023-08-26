import React from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function BlagoEsti({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em       Am {'\n'}</Text>
                  Благо есть славить Господа,{'\n'}
                  <Text style={styles.Accordes}>H7       Em       H7 {'\n'}</Text>
                  И петь имени Твоему, Всевышний{'\n'}
                  <Text style={styles.Accordes}>Em       Am {'\n'}</Text>               
                  Возвещать утром милость Твою {'\n'}
                  <Text style={styles.Accordes}>H7        Em {'\n'}</Text>
                  И истину Твою вночи{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>E      Am       D {'\n'}</Text>
                  Ты возвеселил душу мою,{'\n'}
                  <Text style={styles.Accordes}>G      H7       Em {'\n'}</Text>
                  Я Тебе, Господь, хвалу пою!{'\n'}
                  <Text style={styles.Accordes}>Am       H7 {'\n'}</Text>
                  Дела Твои велики, мой Отец,{'\n'}
                  <Text style={styles.Accordes}>Em       E{'\n'}</Text>
                  Ты мой Господь Ты мой Творец{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Возвожу мои очи к горам,{'\n'}
                  Возношу мои руки к небу.{'\n'}
                  Я познал, что Господь Велик,{'\n'}
                  И на земле превише всех{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Господи - Ты защита моя,{'\n'}
                  Ты мой Бог, Ты Твердыня жизни.{'\n'}
                  Над землёй, небеса высоко,{'\n'}
                  Слава Твоя во век веков.{'\n'}
              </Text>
        </ScrollView> 

           <StatusBar/>
 
     </View>
   );
     
 }
