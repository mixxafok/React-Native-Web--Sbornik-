import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function ZaLoveZaMilost({navigation}) {
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={styles.Song}>
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am                   Dm{'\n'}</Text>
                  За любовь, за милость, за спасение,{'\n'}
                  <Text style={styles.Accordes}> E7                                                Am   E7{'\n'}</Text>
                  Благодарность Ты прими от нас.{'\n'}
                  <Text style={styles.Accordes}>Am                Dm{'\n'}</Text>               
                  Пусть несётся песнь благодарения {'\n'}
                  <Text style={styles.Accordes}>E7                                               Am{'\n'}</Text>
                  Господу - Он кровию нас спас.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am          Dm {'\n'}</Text>
                  Благодарим, благодарим, {'\n'}
                  <Text style={styles.Accordes}>G7            C/E{'\n'}</Text>
                  За Твою любовь благодарим!{'\n'}
                  <Text style={styles.Accordes}>Am         Dm{'\n'}</Text>
                  Достоин Ты вечной хвалы,{'\n'}
                  <Text style={styles.Accordes}>E7            Am{'\n'}</Text>
                  За Твою любовь благодарим!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  За Твои Голгофские страдания,{'\n'}
                  За спасенье, данное Тобой,{'\n'}
                  И за все Твои благодеяния{'\n'}
                  Сердце для Тебя звучит хвалой!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  За прекрасный дом в лазурным небе,{'\n'}
                  За святую вечность без конца{'\n'}
                  Пусть звучит сегодня гимн хваления,{'\n'}
                  Эту песнь поют наши сердца.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
