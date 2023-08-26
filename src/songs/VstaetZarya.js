import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function VstaetZarya({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em        D     {'\n'}</Text>
                  Встает заря, и солнца луч на небо всходит{'\n'}
                  <Text style={styles.Accordes}>Am           H7         Em{'\n'}</Text>
                  Засияв в бескрайней синеве.{'\n'}
                  <Text style={styles.Accordes}>Em       D       {'\n'}</Text>               
                  За новый день хвалу Творцу поет природа,{'\n'}
                  <Text style={styles.Accordes}>Am      H7           Em{'\n'}</Text>
                  Мы воспрянем в радостной хвале.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Em          G{'\n'}</Text>
                  Слава Богу, слава Богу{'\n'}
                  <Text style={styles.Accordes}>Am             D        G  H7{'\n'}</Text>
                  За милость, за прощение грехов!{'\n'}
                  <Text style={styles.Accordes}>Em          G{'\n'}</Text>
                  Слава Богу, слава Богу{'\n'}
                  <Text style={styles.Accordes}>Am      H7   Em{'\n'}</Text>
                  За дивную Его любовь!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Как чудно все, что сотворил наш Бог великий.{'\n'}
                  Да звучит и слава, и хвала.{'\n'}
                  Прекрасно все, что создано Христом-Владыкой,{'\n'}
                  Славьте Бога за дивные дела.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Великий Бог в любви Своей к нам, людям грешным,{'\n'}
                  Отдал в жертву Сына Своего,{'\n'}
                  И нас омыл Он Кровию Своей Пречистой,{'\n'}
                  Будем вечно славить мы Его.{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
