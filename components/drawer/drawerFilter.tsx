import React, { useState } from 'react';
import { View, Text,FlatList, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants';
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import Slider from '@react-native-community/slider';
import stylesOffre from '@/styles/stylesOffre';
import Checkbox from 'expo-checkbox';

type FilterScreenProps = DrawerContentComponentProps & {};

const renderItems = (itemCount: number) => {
  const items = [];
  for (let i = 0; i < itemCount; i++) {
      items.push(
        <Ionicons name='star' size={13} color={Colors.jaune } style={{paddingLeft:2}} key={i}/>
      );
  }
  return items;
}

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) =>{
  
  const { t } = useTranslation();
  const [price,setPrice]= useState(20);
  const [star, setStar] = useState<number>(0);
  const [board ,setBoard] = useState<string>('')
  const [theme ,setTheme] = useState<string>('')
  const [facilite ,setFacilite] = useState<string>('')
  const[showStar,setShowStar]=useState(true)
  const[showBoard,setShowBoard]=useState(false)
  const[showTheme,setShowTheme]=useState(false)
  const[showFacilite,setShowFacilite]=useState(false)
  const stars: number[] = [2, 3, 4, 5];
  const boards: string[]  =["All Inclusive","Bed and breakfast","Full board","Half board","Room only","Uncategorized"]
  
  const applyFilters = () => {
    navigation.closeDrawer();
  };

 return (
    <DrawerContentScrollView >
      <View style={{ flex: 1, padding: 20}}>
        <Text style={stylesOffre.titleFilter}>{ t("screens.filter.title")} </Text>
        <Text style={stylesOffre.sousTitleFilter}> {t("screens.filter.price") }</Text>
        <View style={stylesOffre.dividerFilter}/>
        <Slider
          style={{width: 220}}
          thumbTintColor={Colors.vert}
          minimumValue={20}
          maximumValue={100}
          minimumTrackTintColor={Colors.vert}
          maximumTrackTintColor={Colors.grey}
          onValueChange={(value)=>setPrice(Math.round(value))}
        />
        <View style={stylesOffre.containerPriceFilter}>
          <Text style={stylesOffre.textPriceFilter}> {`${price} USD`}</Text>
          <Text style={stylesOffre.textPriceFilter}> 100 USD </Text>
        </View>
        <View style={stylesOffre.containerPriceFilter}>
          <Text style={stylesOffre.sousTitleFilter}> {t("screens.filter.stars")} </Text>
          <TouchableOpacity onPress={()=>setShowStar(!showStar)}>
            {showStar?
              <Ionicons name="chevron-up-outline" size={20}/>
              :<Ionicons name="chevron-down-outline" size={20}/>
            }
          </TouchableOpacity>
        </View>
        <View style={stylesOffre.dividerFilter}/>
        {showStar?
          <FlatList
            data={stars}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }: { item: number }) => ( 
              <View style={stylesOffre.containerCheckbox}>
                <Checkbox
                  disabled={false}
                  value={item === star}
                  color={item === star ? Colors.vert : Colors.grey}
                  style={{borderWidth:1.5}}
                  onValueChange={(newValue) => newValue ? setStar(item) : setStar(0)}
                />
                <View style={{flexDirection:'row',paddingLeft:5}}>{renderItems(item)}</View>
              </View>
            )}
          />
          :<></>
        }
        <View style={stylesOffre.containerPriceFilter}>
          <Text style={stylesOffre.sousTitleFilter}> {t("screens.filter.board")} </Text>
          <TouchableOpacity onPress={()=>setShowBoard(!showBoard)}>
            {showBoard?
              <Ionicons name="chevron-up-outline" size={20}/>
              :<Ionicons name="chevron-down-outline" size={20}/>
            }
          </TouchableOpacity>
        </View>
        <View style={stylesOffre.dividerFilter}/>
        {showBoard?
          <FlatList
            data={boards}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }: { item: string }) => ( 
              <View  style={stylesOffre.containerCheckbox}>
                <Checkbox
                  disabled={false}
                  color={item === board ? Colors.vert : Colors.grey}
                  style={{borderWidth:1.5}}
                  value={item === board}
                  onValueChange={(newValue) => newValue ? setBoard(item) : setBoard('')}
                />
                <Text style={stylesOffre.textChecbox}>{item}</Text>
              </View>
            )}
          />
          :<></>
        }
        <View style={stylesOffre.containerPriceFilter}>
          <Text style={stylesOffre.sousTitleFilter}>Facilites</Text>
          <TouchableOpacity onPress={()=>setShowFacilite(!showFacilite)}>
            {showFacilite?
              <Ionicons name="chevron-up-outline" size={20}/>
              :<Ionicons name="chevron-down-outline" size={20}/>
            }
          </TouchableOpacity>
        </View>
        <View style={stylesOffre.dividerFilter}/>
        {showFacilite?
          <FlatList
            data={boards}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }: { item: string }) => ( 
              <View style={stylesOffre.containerCheckbox}>
                <Checkbox
                  disabled={false}
                  value={item === theme}
                  color={item === theme ? Colors.vert : Colors.grey}
                  style={{borderWidth:1.5}}
                  onValueChange={(newValue) => newValue ? setTheme(item) : setTheme('')}
                />
                <Text style={stylesOffre.textChecbox}>{item}</Text>
              </View>
            )}
          />
          :<></>
        }
        <View style={stylesOffre.containerPriceFilter}>
          <Text style={stylesOffre.sousTitleFilter}>Themes </Text>
          <TouchableOpacity onPress={()=>setShowTheme(!showTheme)}>
            {showTheme?
              <Ionicons name="chevron-up-outline" size={20}/>
              :<Ionicons name="chevron-down-outline" size={20}/>
            }
          </TouchableOpacity>
        </View>
        <View style={stylesOffre.dividerFilter}/>
        {showTheme?
          <FlatList
            data={boards}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }: { item: string }) => ( 
              <View style={stylesOffre.containerCheckbox}>
                <Checkbox
                  disabled={false}
                  value={item === facilite}
                  color={item === facilite ? Colors.vert : Colors.grey}
                  style={{borderWidth:1.5}}
                  onValueChange={(newValue) => newValue ? setFacilite(item) : setFacilite('')}
                />
                <Text style={stylesOffre.textChecbox}>{item}</Text>
              </View>
            )}
          />
        :<></>
        }
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={stylesOffre.containerButton} onPress={applyFilters}> 
            <Text style={stylesOffre.textButton}> {t("screens.filter.button")} </Text>
          </TouchableOpacity>
        </View>

      </View>
    </DrawerContentScrollView>
  );
};


export default FilterScreen;
