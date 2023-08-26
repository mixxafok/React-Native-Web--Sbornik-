import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function OtPogibeliSpasla({navigation}) {
  
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
                  <Text style={styles.Accordes}>Dm                           Gm{'\n'}</Text>
                  От погибели спасла меня Милость Божия,{'\n'}
                  <Text style={styles.Accordes}>C  A                         Dm{'\n'}</Text>
                  В дне отчаянья нашла меня Милость Божия.{'\n'}
                  <Text style={styles.Accordes}>Cm                                        D{'\n'}</Text>
                  То, что я ещё живу, то, что Господу служу,{'\n'}
                  <Text style={styles.Accordes}>Gm     A                              Dm{'\n'}</Text>
                  Это милость Божия, это милость Божия.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Что грехи мои Он смыл, это милость Божия,{'\n'}
                  И Свой Дух Святой излил - это милость Божия.{'\n'}
                  То, что вера мне дана и ведёт меня она,{'\n'}
                  Это милость Божия, это милость Божия.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Вновь и вновь благодарю эту милость Божию{'\n'}
                  И желанием горю славить милость Божию,{'\n'}
                  Эту бездну доброты, эту силу чистоты,{'\n'}
                  Эту милость Божию, эту милость Божию.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Всё однажды здесь пройдёт, даже милость Божия,{'\n'}
                  От земли Бог заберёт  Свою милость Божию.{'\n'}
                  Там где место для святых будет вечно им светить{'\n'}
                  Это милость Божия, это милость Божия.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 5: {'\n'}</Text>
                  От погибели спасла меня Милость Божия,{'\n'}
                  В день отчаянья нашла меня Милость Божия.{'\n'}
                  То, что я ещё живу, то, что Господу служу,{'\n'}
                  Это милость Божия, Это милость Божия.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
