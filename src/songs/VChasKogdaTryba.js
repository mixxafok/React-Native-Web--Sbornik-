import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function VChasKogdaTryba({navigation}) {
  
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
                  <Text style={styles.Accordes}>G              C              G{'\n'}</Text>
                  В час, когда труба Господня над землёю прозвучит{'\n'}
                  <Text style={styles.Accordes}>D{'\n'}</Text>
                  И настанет вечно светлая заря,{'\n'}
                  <Text style={styles.Accordes}>G             C             G{'\n'}</Text>               
                  Имена Он всех спасённых в перекличке повторит {'\n'}
                  <Text style={styles.Accordes}> D                  G         (C  G){'\n'}</Text>
                  Там, по милости Господней, буду я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>G                {'\n'}</Text>
                  На небесной перекличке, {'\n'}
                  <Text style={styles.Accordes}>D{'\n'}</Text>
                  На небесной перекличке,{'\n'}
                  <Text style={styles.Accordes}>G                         C{'\n'}</Text>
                  На небесной перекличке там, по {'\n'}
                  <Text style={styles.Accordes}>G                 D                   G{'\n'}</Text>
                  Милости Господней, буду я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В день блаженный воскресенья всех умерших во Христе,{'\n'}
                  Водворенья их в обители Царя,{'\n'}
                  Всех святых, омытых Кровию, пролитой на кресте,{'\n'}
                  Созовёт Он, и на зов отвечу я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Дай трудиться для Тебя, Господь, любовью всем служить,{'\n'}
                  С утра раннего и до заката дня.{'\n'}
                  А когда велишь работу мне земную Ты сложить,{'\n'}
                  На небесный клич тогда предстану я.{'\n'}
              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
