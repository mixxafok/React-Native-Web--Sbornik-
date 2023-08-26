import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function MoyaMolitva({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em          D    C {'\n'}</Text>
                  Моя молитва да струится{'\n'}
                  <Text style={styles.Accordes}>Am          Hm    Em {'\n'}</Text>
                  К Тебе Госопдь, как фимиам{'\n'}
                  <Text style={styles.Accordes}>Em          D    C {'\n'}</Text>               
                  Как сердце жаждет, как стремится{'\n'}
                  <Text style={styles.Accordes}>Am          Hm          Em {'\n'}</Text>
                  В священный Твой небесный храм{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>G             D {'\n'}</Text>
                     Боже, я молюсь за Беларусь, {'\n'}
                  <Text style={styles.Accordes}>Em          Hm {'\n'}</Text>
                      Боже, молю Тебя за людей,{'\n'}
                  <Text style={styles.Accordes}>C             D{'\n'}</Text>
                      Ты их прости, Ты их спаси,{'\n'}
                  <Text style={styles.Accordes}>Hm          Em {'\n'}</Text>
                      Милость Свою нам яви,{'\n'}
                  <Text style={styles.Accordes}>G             D  {'\n'}</Text>
                      Боже, я знаю, Ты будешь с нами{'\n'}
                  <Text style={styles.Accordes}>Em          Hm  {'\n'}</Text>
                      В храме Своем под небесами{'\n'}
                  <Text style={styles.Accordes}>C             D {'\n'}</Text>
                      Радость и мир Ты даровал,{'\n'}
                  <Text style={styles.Accordes}>Hm          Em {'\n'}</Text>
                      Жизнь за людей отдал{'\n'}
                  <Text style={styles.Accordes}>C     Am          H7    Em{'\n'}</Text>
                      И в Книгу Жизни нас записал{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Ты в Своем слове обещаешь{'\n'}
                  Всем, кто Тебя ни призовет,{'\n'}
                  Что Ты услышишь в день печали,{'\n'}
                  С души греховной снимешь гнет.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Пошли, Господь, нам силу свыше,{'\n'}
                  Людей любить и звать к Тебе.{'\n'}
                  Когда мы молимся, услышь нас,{'\n'}
                  и Помощь дай Свою с небес.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
