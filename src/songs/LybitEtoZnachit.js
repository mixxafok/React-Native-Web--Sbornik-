import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function LybitEtoZnachit({navigation}) {
  
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
                  <Text style={styles.Accordes}>D           E           G           D{'\n'}</Text>
                  Любить - это значит жить радостью друга,{'\n'}
                  <Text style={styles.Accordes}>E           A7           D{'\n'}</Text>
                  Страдать его горем, себя забывать,{'\n'}
                  <Text style={styles.Accordes}>D           G           C           F{'\n'}</Text>               
                  В тяжелую пору скорбей и недуга {'\n'}
                  <Text style={styles.Accordes}>G           G           A7{'\n'}</Text>
                  Ему бескорыстно свой труд отдавать.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Любить - это значит прощать со смиреньем  {'\n'}
                  И горя, обиды в себе не таить.  {'\n'}
                  Любить - это значит с великим терпеньем  {'\n'}
                  С дороги неправды к добру приводить. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Любить - это значит в минуту тревоги,  {'\n'}
                  Спасая людей, свою жизнь не жалеть. {'\n'}
                  Кто любит - тот дышит надеждою Бога. {'\n'}
                  Он жив! И не может вовек умереть. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Любовь есть чудесный подарок от Бога!  {'\n'}
                  Ценней всех сокровищ, ценней всех даров.  {'\n'}
                  Где весть о любви достигает до слуха,  {'\n'}
                  Пустыня становится краем цветов. {'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
