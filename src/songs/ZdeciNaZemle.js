import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function ZdeciNaZemle({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am          Dm{'\n'}</Text>
                  Здесь на земле мы только странники {'\n'}
                  <Text style={styles.Accordes}>E7          Am{'\n'}</Text>
                  И часто дальний путь нас ждет. {'\n'}
                  <Text style={styles.Accordes}>Am          Dm{'\n'}</Text>
                  Порою ноги от усталости болят, {'\n'}
                  <Text style={styles.Accordes}>F           E7{'\n'}</Text>
                  Но в небе Родина нас ждет.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am          Dm {'\n'}</Text>
                  Там, там, там в небесах{'\n'}
                  <Text style={styles.Accordes}>G           C        E7{'\n'}</Text>
                  Ангелы поют,{'\n'}
                  <Text style={styles.Accordes}>Am          Dm{'\n'}</Text>
                  В синих, синих, синих небесах{'\n'}
                  <Text style={styles.Accordes}>E7          Am{'\n'}</Text>
                  Родина нас ждет{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Порою мы друзей встречаем, {'\n'}
                  Но снова в дальний путь идем. {'\n'}
                  Увидимся у ног Спасителя Христа{'\n'}
                  Ведь в небе Родина нас ждет.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  В дороге дальней, дорогие друзья, {'\n'}
                  Вы расскажите людям всем, {'\n'}
                  Как велика любовь Спасителя Христа, {'\n'}
                  Что в небе Родина нас ждет.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
