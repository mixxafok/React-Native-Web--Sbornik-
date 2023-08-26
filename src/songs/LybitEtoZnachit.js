import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function LybitEtoZnachit(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues'))
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D           E           G           D{'\n'}</Text>
                  Любить - это значит жить радостью друга,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E           A7           D{'\n'}</Text>
                  Страдать его горем, себя забывать,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>D           G           C           F{'\n'}</Text>               
                  В тяжелую пору скорбей и недуга {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G           G           A7{'\n'}</Text>
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
